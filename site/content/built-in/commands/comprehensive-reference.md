# Claude Code Comprehensive Command Reference

Every slash command available in Claude Code as of 2026. Commands marked **[Skill]** are bundled skills — prompt-based workflows that Claude can also invoke automatically.

---

## Session & Navigation

| Command | Description |
|---------|-------------|
| `/help` | Show help and available commands |
| `/clear` | Clear conversation history and free context. Aliases: `/reset`, `/new` |
| `/compact [instructions]` | Compress conversation with optional focus instructions |
| `/context` | Visualize current context usage as a colored grid with optimization suggestions |
| `/cost` | Show token usage statistics for the session |
| `/resume [session]` | Resume a conversation by ID or name, or open session picker. Alias: `/continue` |
| `/branch [name]` | Branch the conversation at this point. Alias: `/fork` |
| `/rename [name]` | Rename the current session. Auto-generates a name if none provided |
| `/export [filename]` | Export conversation as plain text to file or clipboard |
| `/copy [N]` | Copy last assistant response to clipboard. Pass N for Nth-latest. Interactive code block picker |
| `/rewind` | Rewind conversation and/or code to a previous point. Alias: `/checkpoint` |
| `/exit` | Exit Claude Code. Alias: `/quit` |

## Model & Mode Controls

| Command | Description |
|---------|-------------|
| `/model [model]` | Select or change AI model. Left/right arrows adjust effort level |
| `/plan [description]` | Enter plan mode. Optional description starts planning immediately |
| `/fast [on\|off]` | Toggle fast mode |
| `/effort [level]` | Set effort level: `low`, `medium`, `high`, `max` (Opus only), `auto` |

## Configuration & Settings

| Command | Description |
|---------|-------------|
| `/config` | Open Settings interface (theme, model, output style). Alias: `/settings` |
| `/permissions` | Manage allow/ask/deny rules for tool permissions. Alias: `/allowed-tools` |
| `/memory` | Edit CLAUDE.md files, enable/disable auto-memory, view entries |
| `/hooks` | View hook configurations for tool events |
| `/mcp` | Manage MCP server connections and OAuth authentication |
| `/init` | Initialize project with CLAUDE.md. Set `CLAUDE_CODE_NEW_INIT=1` for interactive flow |
| `/keybindings` | Open keybindings configuration file |
| `/theme` | Change color theme (light, dark, colorblind, ANSI variants) |
| `/color [color]` | Set prompt bar color: red, blue, green, yellow, purple, orange, pink, cyan |
| `/sandbox` | Toggle sandbox mode (platform-dependent) |
| `/terminal-setup` | Configure terminal keybindings for Shift+Enter |
| `/statusline` | Configure Claude Code's status line display |

## Diagnostics & Status

| Command | Description |
|---------|-------------|
| `/doctor` | Diagnose and verify installation and settings. Press `f` to auto-fix issues |
| `/status` | Show version, model, account, connectivity. Works while Claude is responding |
| `/stats` | Visualize daily usage, session history, streaks, model preferences |
| `/diff` | Interactive diff viewer: uncommitted changes and per-turn diffs |
| `/usage` | Show plan usage limits and rate limit status |
| `/release-notes` | View changelog in an interactive version picker |

## Skills (Built-in Workflows)

| Command | Description |
|---------|-------------|
| `/batch <instruction>` | **[Skill]** Orchestrate large-scale parallel changes. Decomposes into 5-30 units, spawns agents in isolated worktrees, opens PRs. Example: `/batch migrate all contracts to new clause format` |
| `/simplify [focus]` | **[Skill]** Review recently changed files for code reuse, quality, efficiency. Spawns 3 parallel review agents |
| `/debug [description]` | **[Skill]** Enable debug logging and troubleshoot issues. Reads session debug log |
| `/claude-api` | **[Skill]** Load Claude API reference for your language (Python, TypeScript, etc.) |
| `/loop [interval] [prompt]` | **[Skill]** Run a prompt repeatedly. Alias: `/proactive`. Example: `/loop 5m check if the deploy finished` |
| `/security-review` | Analyze pending changes on current branch for security vulnerabilities |

## Collaboration & Multi-device

| Command | Description |
|---------|-------------|
| `/btw <question>` | Quick side question without adding to conversation. No tool access, single response |
| `/desktop` | Continue session in Claude Code Desktop app (macOS/Windows). Alias: `/app` |
| `/remote-control` | Make session available for remote control from claude.ai. Alias: `/rc` |
| `/teleport` | Pull a web session into this terminal. Alias: `/tp` |
| `/autofix-pr [prompt]` | Watch current branch's PR, push fixes when CI fails or reviewers comment |
| `/schedule [description]` | Create, update, list, or run routines (scheduled tasks) |
| `/ultraplan <prompt>` | Draft a plan in an ultraplan session, review in browser, execute remotely |

## Project & Team

| Command | Description |
|---------|-------------|
| `/add-dir <path>` | Add a working directory for file access during session |
| `/agents` | Manage agent configurations |
| `/skills` | List available skills |
| `/plugin` | Manage Claude Code plugins |
| `/reload-plugins` | Reload all active plugins to apply changes |
| `/team-onboarding` | Generate team onboarding guide from your usage history |
| `/install-github-app` | Set up Claude GitHub Actions for a repository |
| `/install-slack-app` | Install Claude Slack app via OAuth |
| `/web-setup` | Connect GitHub account to Claude Code on the web |

## Background & Tasks

| Command | Description |
|---------|-------------|
| `/tasks` | List and manage background tasks. Alias: `/bashes` |
| `Ctrl+B` | Background a running command (tmux users: press twice) |

## Account & Privacy

| Command | Description |
|---------|-------------|
| `/login` | Sign in to Anthropic account |
| `/logout` | Sign out |
| `/privacy-settings` | View and update privacy settings (Pro/Max only) |
| `/extra-usage` | Configure extra usage when rate limited |
| `/upgrade` | Open upgrade page for higher plan tier |
| `/feedback` | Submit feedback. Alias: `/bug` |
| `/voice` | Toggle push-to-talk voice dictation |

## MCP Prompts

MCP servers can expose prompts as commands using the format:
```
/mcp__<server>__<prompt>
```
These are dynamically discovered from connected servers.

---

*Source: [code.claude.com/docs/en/commands](https://code.claude.com/docs/en/commands) — last verified 2026-04-14*
