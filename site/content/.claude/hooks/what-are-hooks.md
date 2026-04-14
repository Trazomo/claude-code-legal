# What Are Hooks?

**Hooks** are shell scripts that run automatically before or after Claude's tool calls. They act as guardrails — automated checks that enforce firm policies without relying on prompts.

## How They Work

Hooks are configured in `.claude/settings.json` and triggered by events:

- **PreToolUse** — runs *before* Claude writes or edits a file. Can **block** the action.
- **PostToolUse** — runs *after* Claude writes or edits a file. Can **warn** but not block.

A hook that exits with code `0` allows the action. Code `2` blocks it with a message.

## Why Hooks Matter for Legal Work

Confidentiality isn't optional — it's an ethical obligation. Hooks enforce it at the system level:

- **Confidentiality guard** (PreToolUse) — blocks writes containing SSN patterns, privilege markers, or client names. No matter how you prompt Claude, PII cannot appear in output files.
- **Citation validator** (PostToolUse) — checks every written markdown file for Bluebook format errors. Catches missing reporters, non-italicized case names, and incorrect section symbols.

Hooks are your last line of defense. Even if a prompt is sloppy, the hook catches the mistake before it ships.

## Files in This Folder

- **confidentiality-guard.sh** — PreToolUse: blocks PII and privilege markers in file writes
- **citation-validator.sh** — PostToolUse: validates Bluebook citation format in markdown files
