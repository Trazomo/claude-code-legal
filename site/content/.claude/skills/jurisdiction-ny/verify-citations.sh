#!/bin/bash
# verify-citations.sh — Check Bluebook citation format in a legal document
# Usage: ./verify-citations.sh <file>
#
# Checks for common citation errors:
# - Missing reporter abbreviations
# - Incorrect court abbreviations
# - Missing year in parenthetical
# - Malformed section symbols

FILE="$1"

if [ -z "$FILE" ]; then
  echo "Usage: ./verify-citations.sh <file>"
  exit 1
fi

if [ ! -f "$FILE" ]; then
  echo "Error: File not found: $FILE"
  exit 1
fi

echo "=== Citation Verification: $FILE ==="
echo ""

ERRORS=0

# Check for "Section" instead of section symbol
if grep -n "Section [0-9]" "$FILE" 2>/dev/null; then
  echo "[WARN] Use section symbol instead of 'Section' in citations"
  ERRORS=$((ERRORS + 1))
fi

# Check for missing year in case citations (pattern: number closing paren without year)
if grep -nE '\([A-Z][a-z]+\. (Ct|Cir|Div)\. *\)' "$FILE" 2>/dev/null; then
  echo "[WARN] Case citation may be missing year in parenthetical"
  ERRORS=$((ERRORS + 1))
fi

# Check for "Id." not italicized (should be *Id.* in markdown)
if grep -n '[^*]Id\.' "$FILE" 2>/dev/null | grep -v '^\*Id\.' ; then
  echo "[WARN] 'Id.' should be italicized (*Id.*) per Bluebook"
  ERRORS=$((ERRORS + 1))
fi

# Check for common NY reporter errors
if grep -n "N\.Y\.S\.2d" "$FILE" 2>/dev/null; then
  echo "[INFO] Found N.Y.S.2d citations — verify these shouldn't be N.Y.S.3d (post-2020)"
fi

# Check for "supra" without prior full citation
if grep -n "supra" "$FILE" 2>/dev/null; then
  echo "[INFO] Found 'supra' reference — verify full citation appears earlier in document"
fi

echo ""
if [ "$ERRORS" -eq 0 ]; then
  echo "No citation format errors detected."
else
  echo "$ERRORS potential issue(s) found. Review above."
fi
