# What Are Custom Commands?

**Custom commands** are saved prompt templates you invoke with a slash. They turn multi-paragraph instructions into a single keystroke.

> **Note**: Commands are being merged into the newer Skills system. They still work, but new workflows should use Skills instead.

## How They Work

Create a markdown file in `.claude/commands/` with a prompt template:

```markdown
---
description: What this command does
---

Your prompt template here. Use $ARGUMENTS for user input.
```

Then invoke it: `/review-contract path/to/contract.pdf`

Claude reads the template, substitutes `$ARGUMENTS`, and executes it as a prompt.

## Why Commands Matter for Legal Work

Legal professionals repeat the same complex analysis patterns. Commands encode your best prompt once:
- `/review-contract` — structured analysis with risk ratings, not a vague "review this"
- `/draft-memo` — IRAC format with Bluebook citations, not a freeform summary

## Files in This Folder

- **review-contract.md** — Structured contract analysis: parties, terms, risk flags, missing clauses, recommendations
- **draft-memo.md** — IRAC legal research memo with jurisdiction defaults and citation format
