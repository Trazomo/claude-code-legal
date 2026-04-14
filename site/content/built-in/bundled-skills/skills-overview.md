# Built-in Skills — Legal Applications

Claude Code ships with built-in skills that are especially useful in legal workflows. Here's how to apply them in practice.

## /batch — Bulk Operations

**Legal use**: Apply clause updates across an entire template library.

```
/batch "Update the force majeure clause in all templates under /templates/contracts/ to include pandemic and cyber incident language"
```

When your firm updates its standard terms, `/batch` can apply the change to 50+ templates in one pass — with a diff for each so you can review before committing.

## /init — Project Setup

**Legal use**: Generate a `CLAUDE.md` with jurisdiction defaults, citation standards, and confidentiality rules.

```
/init
```

Creates a project-level `CLAUDE.md` tailored to the files it finds in the directory. For a legal project, it will detect matter files and suggest jurisdiction, citation format, and confidentiality rules.

## /compact — Context Management

**Legal use**: When reviewing a long contract and running into context limits, `/compact` summarizes the conversation so far and frees up space to continue the review without losing your progress.

## /clear — Fresh Start

**Legal use**: Between matters, use `/clear` to ensure no context from the previous client's work carries over. Critical for maintaining confidentiality between matters.

## /cost — Token Usage

**Legal use**: Track API spend per matter. Useful for allocating AI costs to specific client billing codes.

## /memory — Project Context

**Legal use**: View and edit what Claude remembers about your project — jurisdiction defaults, client preferences, firm standards. This is the runtime view of your `CLAUDE.md`.
