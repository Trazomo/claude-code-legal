# Claude Code Cheat Sheet

Quick reference for every command and shortcut. **Bookmark this page.**

---

## Keyboard Shortcuts

### Essential Controls

| Shortcut | What It Does |
|----------|-------------|
| `Shift+Tab` | Cycle permission modes: default → acceptEdits → plan → auto |
| `Ctrl+C` | Cancel current input or stop generation |
| `Ctrl+D` | Exit Claude Code |
| `Ctrl+L` | Clear prompt input (keeps conversation) |
| `Ctrl+O` | Toggle transcript viewer (see full tool usage) |
| `Ctrl+R` | Reverse search command history |
| `Ctrl+T` | Toggle task list |
| `Ctrl+B` | Background running tasks |
| `Ctrl+V` | Paste image from clipboard |
| `Esc Esc` | Rewind or summarize from a point |
| `Alt+P` | Switch model without clearing prompt |
| `Alt+T` | Toggle extended thinking |
| `Alt+O` | Toggle fast mode |

### Input Shortcuts

| Shortcut | What It Does |
|----------|-------------|
| `/` | Start a command or skill |
| `!` | Run bash command directly |
| `@` | File path autocomplete |
| `\ + Enter` | Multiline input |
| `Up/Down` | Navigate command history |

### Text Editing

| Shortcut | What It Does |
|----------|-------------|
| `Ctrl+K` | Delete to end of line |
| `Ctrl+U` | Delete to start of line |
| `Ctrl+Y` | Paste deleted text |
| `Alt+B` | Move back one word |
| `Alt+F` | Move forward one word |

---

## Slash Commands — Quick Reference

### Session Management

| Command | What It Does |
|---------|-------------|
| `/clear` | Clear conversation, start fresh — **use between client matters** |
| `/compact` | Compress context, keep key facts — use when context is >75% full |
| `/context` | Show token usage breakdown |
| `/cost` | Show session token usage and cost |
| `/resume` | Resume a previous session |
| `/rename` | Name the current session |
| `/branch` | Branch the conversation at this point |
| `/export` | Export conversation as text |

### Mode Controls

| Command | What It Does |
|---------|-------------|
| `/plan` | Enter plan mode — Claude outlines approach before implementing |
| `/fast` | Toggle fast mode on/off |
| `/model` | Switch AI model |
| `/effort` | Set effort level (low/medium/high/max) |

### Diagnostics

| Command | What It Does |
|---------|-------------|
| `/help` | Show all available commands |
| `/doctor` | Check installation health |
| `/status` | Version, model, account info |
| `/diff` | Show uncommitted changes |
| `/stats` | Usage history and streaks |

### Configuration

| Command | What It Does |
|---------|-------------|
| `/config` | Open settings interface |
| `/permissions` | Manage tool allow/deny rules |
| `/memory` | Edit CLAUDE.md and auto-memory |
| `/hooks` | View hook configurations |
| `/mcp` | Manage MCP server connections |
| `/init` | Initialize project with CLAUDE.md |
| `/keybindings` | Customize keyboard shortcuts |

### Skills (Built-in)

| Command | What It Does |
|---------|-------------|
| `/batch` | Orchestrate large-scale parallel changes |
| `/simplify` | Review and fix code quality issues |
| `/debug` | Enable debug logging, troubleshoot issues |
| `/claude-api` | Load Claude API reference for your language |
| `/loop` | Run a prompt repeatedly on an interval |

### Collaboration

| Command | What It Does |
|---------|-------------|
| `/btw` | Quick side question without adding to conversation |
| `/desktop` | Continue session in Desktop app |
| `/remote-control` | Make session available for remote control |
| `/teleport` | Pull a web session into terminal |
| `/autofix-pr` | Watch PR and auto-fix CI failures |

### Utilities

| Command | What It Does |
|---------|-------------|
| `/copy` | Copy last response to clipboard |
| `/theme` | Change color theme |
| `/color` | Set prompt bar color |
| `/voice` | Toggle push-to-talk dictation |
| `/rewind` | Rewind conversation/code to previous point |

---

## Permission Modes

Cycle with `Shift+Tab`:

| Mode | Behavior |
|------|----------|
| **Default** | Ask for most tool actions |
| **Accept Edits** | Auto-approve file edits, ask for shell commands |
| **Plan** | Claude outlines only, no file changes |
| **Auto** | Full autonomy (use with hooks as guardrails) |

---

## Legal-Specific Tips

| Scenario | Command |
|----------|---------|
| Starting a new client matter | `/clear` then `/init` |
| Reviewing a long contract | `/compact` when context gets full |
| Multi-day matter review | Close terminal, resume with `claude --continue` |
| Checking what Claude can access | `/permissions` |
| Before modifying templates | `/plan` to review approach first |
| Batch-updating clause language | `/batch update indemnification in all templates/` |
| Quick citation question | `/btw what's the Bluebook format for CPLR?` |
