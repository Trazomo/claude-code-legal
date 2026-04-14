#!/bin/bash
# PreToolUse Hook: Confidentiality Guard
# Blocks file writes that contain privileged or PII content.
# Runs before any Write or Edit tool call.
#
# Exit 0 = allow, Exit 2 = block with message

TOOL_NAME="$1"
FILE_PATH="$2"

# Only check Write and Edit operations
if [[ "$TOOL_NAME" != "Write" && "$TOOL_NAME" != "Edit" ]]; then
  exit 0
fi

# Read the content being written from stdin
CONTENT=$(cat)

BLOCKED=false
REASONS=""

# Check for SSN patterns (XXX-XX-XXXX)
if echo "$CONTENT" | grep -qE '[0-9]{3}-[0-9]{2}-[0-9]{4}'; then
  BLOCKED=true
  REASONS="$REASONS\n  - Social Security Number pattern detected"
fi

# Check for privilege markers that should not appear in AI output
for MARKER in "PRIVILEGED AND CONFIDENTIAL" "ATTORNEY-CLIENT PRIVILEGE" "ATTORNEY WORK PRODUCT"; do
  if echo "$CONTENT" | grep -qi "$MARKER"; then
    # These markers are OK in template files
    if [[ "$FILE_PATH" != *"template"* ]]; then
      BLOCKED=true
      REASONS="$REASONS\n  - Privilege marker found: $MARKER"
    fi
  fi
done

# Check for real client names from .env (if configured)
if [ -f ".env.local" ]; then
  CLIENT_NAMES=$(grep "^CLIENT_NAME" .env.local | cut -d= -f2)
  for NAME in $CLIENT_NAMES; do
    if echo "$CONTENT" | grep -qi "$NAME"; then
      BLOCKED=true
      REASONS="$REASONS\n  - Client name detected: use [Client] placeholder instead"
    fi
  done
fi

if [ "$BLOCKED" = true ]; then
  echo "BLOCKED: Confidentiality guard prevented this write."
  echo -e "Reasons:$REASONS"
  echo ""
  echo "Fix: Replace identifying information with placeholders ([Client], [Opposing Party], etc.)"
  exit 2
fi

exit 0
