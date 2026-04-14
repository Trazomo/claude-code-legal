# Built-in Commands — Legal Context

Claude Code's built-in slash commands, applied to legal workflows.

## Navigation & Session

| Command | Legal Application |
|---------|-------------------|
| `/help` | View all available commands, including custom ones like `/review-contract` and `/draft-memo` |
| `/clear` | Clear conversation context between client matters to maintain confidentiality |
| `/compact` | Compress long contract reviews to free context space without losing analysis |
| `/status` | Check current project context: jurisdiction, active matter, loaded rules |

## Configuration

| Command | Legal Application |
|---------|-------------------|
| `/init` | Set up a new matter with CLAUDE.md containing jurisdiction, citation standards, and firm rules |
| `/config` | Review and modify project settings, MCP connections, and permissions |
| `/permissions` | Audit what Claude can and cannot access — critical for client data isolation |
| `/mcp` | Check connected tools (filesystem, database, research APIs) |

## Development

| Command | Legal Application |
|---------|-------------------|
| `/diff` | Review changes to contract clauses before committing — see exactly what was modified |
| `/doctor` | Diagnose connection issues with MCP servers (database, research tools) |
| `/cost` | Track token usage per session for client billing allocation |
| `/memory` | View Claude's project context — jurisdiction defaults, firm standards, active rules |

## Workflow

| Command | Legal Application |
|---------|-------------------|
| `/review-contract` | *(Custom)* Structured contract analysis with risk ratings |
| `/draft-memo` | *(Custom)* IRAC legal research memorandum |
| `/batch` | *(Built-in skill)* Apply clause updates across multiple templates |

Custom commands live in `.claude/commands/` and can be shared across the firm by committing them to a shared repository.
