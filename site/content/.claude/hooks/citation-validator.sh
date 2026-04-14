#!/bin/bash
# PostToolUse Hook: Citation Validator
# Checks written files for common Bluebook citation format errors.
# Runs after Write/Edit tool calls on .md files.
#
# Exit 0 = pass (informational warnings only)

TOOL_NAME="$1"
FILE_PATH="$2"

# Only check Write and Edit on markdown files
if [[ "$TOOL_NAME" != "Write" && "$TOOL_NAME" != "Edit" ]]; then
  exit 0
fi

if [[ "$FILE_PATH" != *.md ]]; then
  exit 0
fi

if [ ! -f "$FILE_PATH" ]; then
  exit 0
fi

WARNINGS=0

# Check: "Section" spelled out instead of section symbol
if grep -qn "Section [0-9]" "$FILE_PATH" 2>/dev/null; then
  echo "[Citation] Warning: Use section symbol (section) instead of 'Section' in legal citations"
  WARNINGS=$((WARNINGS + 1))
fi

# Check: Case names not italicized (simple heuristic: "v." not between asterisks)
if grep -qnE '[A-Z][a-z]+ v\. [A-Z]' "$FILE_PATH" 2>/dev/null; then
  # Check if it's already italicized
  NON_ITALIC=$(grep -nE '[^*][A-Z][a-z]+ v\. [A-Z]' "$FILE_PATH" 2>/dev/null | grep -v '^\*' | head -3)
  if [ -n "$NON_ITALIC" ]; then
    echo "[Citation] Warning: Case names should be italicized (*Party v. Party*)"
    echo "  $NON_ITALIC"
    WARNINGS=$((WARNINGS + 1))
  fi
fi

# Check: "Id." not italicized
if grep -qn '[^*]Id\.' "$FILE_PATH" 2>/dev/null; then
  echo "[Citation] Warning: 'Id.' should be italicized (*Id.*) per Bluebook Rule 4.1"
  WARNINGS=$((WARNINGS + 1))
fi

# Check: Missing parenthetical year in case citations
if grep -qnE '[0-9]+ [A-Z]\.[A-Z0-9a-z.]+[0-9]+ *$' "$FILE_PATH" 2>/dev/null; then
  echo "[Citation] Warning: Case citation may be missing year parenthetical"
  WARNINGS=$((WARNINGS + 1))
fi

if [ "$WARNINGS" -gt 0 ]; then
  echo ""
  echo "[Citation] $WARNINGS format warning(s). Review before finalizing."
fi

# Always exit 0 — warnings are informational, not blocking
exit 0
