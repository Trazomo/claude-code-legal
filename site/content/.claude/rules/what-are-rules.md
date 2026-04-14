# What Are Rules?

**Rules** are contextual conventions that Claude loads automatically based on the files you're editing. Unlike CLAUDE.md (which always loads), rules activate only when relevant.

## How They Work

Each rule file has a glob pattern in its frontmatter that tells Claude when to load it:

```yaml
---
globs: ["contracts/**", "*.contract.md"]
---
```

When you open a file matching that pattern, Claude reads the rule and follows it. When you switch to a different file type, the rule unloads.

## Why Rules Matter for Legal Work

Legal work has context-dependent conventions:
- **Contracts** need defined terms verification, cross-reference checks, and clause completeness
- **Memos** need IRAC format, Bluebook citations, and jurisdiction verification
- **Filings** need court-specific formatting rules

Rules let you encode these conventions once and have Claude apply them automatically — no need to repeat "use Bluebook format" in every prompt.

## Files in This Folder

- **contracts.md** — Contract review conventions (defined terms, standard clauses, red flags)
- **memos.md** — Legal memo conventions (IRAC format, Bluebook citations, jurisdiction checks)
