# What Are Skills?

**Skills** teach Claude specialized knowledge that it loads autonomously when needed. Unlike rules (which match file patterns), skills are discovered by Claude based on context — it reads the skill description and decides when to apply it.

## How They Work

A skill is a folder with a `SKILL.md` file and optional supporting files:

```
.claude/skills/jurisdiction-ny/
  SKILL.md              # Skill definition (frontmatter + content)
  verify-citations.sh   # Executable script
  case-law-reference.md # Reference documentation
  memo-template.md      # Template asset
```

The `SKILL.md` frontmatter tells Claude what the skill is for:

```yaml
---
name: jurisdiction-ny
description: New York legal requirements, statutes of limitation, and citation conventions
---
```

When Claude encounters a task involving New York law, it loads this skill automatically.

## Why Skills Matter for Legal Work

Legal knowledge is jurisdiction-specific and detail-heavy. Skills let you package:
- **Statutes of limitation** — accurate lookup tables, not approximations
- **Citation formats** — Bluebook rules enforced consistently
- **Case law references** — key precedents with proper citations
- **Templates** — firm-standard document formats

A junior associate can use Claude with the same jurisdiction expertise as a senior partner — because the skill encodes that knowledge.

## Files in This Folder

- **jurisdiction-ny/** — New York jurisdiction skill with statutes, case law, citation verifier, and memo template
