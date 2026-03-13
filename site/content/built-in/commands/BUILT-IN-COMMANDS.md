# Built-in Commands

Commands baked into Claude Code that execute fixed logic directly. Type `/` at the prompt to see them all, or type `/` followed by any letters to filter. Unlike [bundled skills](^Prompt-driven workflows like /simplify and /batch that use Claude's tools to orchestrate work. See the bundled skills section), built-in commands run immediately without agentic orchestration.

Not every command is visible to every user. Some depend on your platform, plan, or environment. For example, `/desktop` only appears on macOS and Windows, `/upgrade` is only available on Pro and Max plans, and `/terminal-setup` is hidden when your terminal already supports its keybindings.

In the tables below, `<arg>` means required and `[arg]` means optional.

## Session Management

Control your conversation lifecycle, context, and history.

| Command | Purpose |
|---|---|
| `/clear` | Clear conversation history and free up context. Aliases: `/reset`, `/new` |
| `/compact [instructions]` | Compress conversation to reclaim context, with optional focus instructions |
| `/context` | Visualize current context usage as a coloured grid with optimization suggestions |
| `/exit` | Exit the CLI. Alias: `/quit` |
| `/fork [name]` | Create a fork of the current conversation at this point |
| `/rename [name]` | Rename the current session. Without a name, auto-generates one from history |
| `/resume [session]` | Resume a conversation by ID or name, or open the session picker. Alias: `/continue` |
| `/rewind` | Rewind conversation and code to a previous point, or summarise from a message. Alias: `/checkpoint` |

## Getting Information

View status, costs, diagnostics, and session data.

| Command | Purpose |
|---|---|
| `/btw <question>` | Ask a quick side question without adding to conversation history |
| `/copy` | Copy the last response to clipboard. Shows a picker when code blocks are present |
| `/cost` | Show token usage statistics for the current session |
| `/diff` | Interactive diff viewer for uncommitted changes and per-turn diffs |
| `/doctor` | Diagnose and verify your Claude Code installation and settings |
| `/export [filename]` | Export conversation as plain text. With a filename, writes directly to file |
| `/help` | Show help and available commands |
| `/insights` | Generate a report analysing your sessions: project areas, patterns, friction points |
| `/release-notes` | View the full changelog, most recent version first |
| `/stats` | Visualise daily usage, session history, streaks, and model preferences |
| `/status` | Show version, model, account, and connectivity info |
| `/usage` | Show plan usage limits and rate limit status |

## Configuration

Adjust settings, permissions, themes, and editor modes.

| Command | Purpose |
|---|---|
| `/config` | Open the settings interface for theme, model, output style, and preferences. Alias: `/settings` |
| `/fast [on\|off]` | Toggle fast mode on or off |
| `/keybindings` | Open or create your keybindings configuration file |
| `/model [model]` | Select or change the AI model. Use left/right arrows to adjust effort level |
| `/permissions` | View or update tool permissions. Alias: `/allowed-tools` |
| `/plan` | Enter plan mode directly from the prompt |
| `/sandbox` | Toggle sandbox mode (supported platforms only) |
| `/statusline` | Configure the status line display |
| `/terminal-setup` | Configure terminal keybindings for Shift+Enter and other shortcuts |
| `/theme` | Change the colour theme. Includes light, dark, colourblind, and ANSI variants |
| `/vim` | Toggle between Vim and Normal editing modes |

## Project Setup

Initialise projects, manage directories, and configure memory.

| Command | Purpose |
|---|---|
| `/add-dir <path>` | Add a new working directory to the current session |
| `/init` | Analyse your codebase and generate a starter `CLAUDE.md` |
| `/memory` | Edit `CLAUDE.md` files, toggle auto-memory, and view memory entries |

## Claude Code Ecosystem

Manage skills, agents, hooks, plugins, and MCP servers.

| Command | Purpose |
|---|---|
| `/agents` | Manage agent configurations |
| `/hooks` | Manage hook configurations for tool events |
| `/mcp` | Manage MCP server connections and OAuth authentication |
| `/plugin` | Manage Claude Code plugins |
| `/reload-plugins` | Reload all active plugins to apply changes without restarting |
| `/skills` | List available skills |

## Integrations

Connect Claude Code to external apps and services.

| Command | Purpose |
|---|---|
| `/chrome` | Configure Claude in Chrome settings |
| `/desktop` | Continue the session in the Claude Code Desktop app. macOS and Windows only. Alias: `/app` |
| `/ide` | Manage IDE integrations and show status |
| `/install-github-app` | Set up Claude GitHub Actions for a repository |
| `/install-slack-app` | Install the Claude Slack app via OAuth |
| `/mobile` | Show QR code to download the Claude mobile app. Aliases: `/ios`, `/android` |
| `/pr-comments [PR]` | Fetch comments from a GitHub pull request. Auto-detects the current branch's PR |
| `/remote-control` | Make this session available for remote control from claude.ai. Alias: `/rc` |
| `/remote-env` | Configure the default remote environment for teleport sessions |
| `/security-review` | Analyse pending changes on the current branch for security vulnerabilities |

## Account

Manage authentication, plans, and feedback.

| Command | Purpose |
|---|---|
| `/extra-usage` | Configure extra usage when rate limits are hit |
| `/feedback [report]` | Submit feedback about Claude Code. Alias: `/bug` |
| `/login` | Sign in to your Anthropic account |
| `/logout` | Sign out from your Anthropic account |
| `/passes` | Share a free week of Claude Code with friends (eligible accounts only) |
| `/privacy-settings` | View and update privacy settings (Pro and Max plans only) |
| `/upgrade` | Open the upgrade page for a higher plan tier |

## Background Tasks

| Command | Purpose |
|---|---|
| `/tasks` | List and manage background tasks |

Background tasks let you continue working while long-running processes execute. Press `Ctrl+B` to move a running command to the background (tmux users press twice). Set `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1` to disable.

## MCP Prompts

MCP servers can expose prompts that appear as commands using the format `/mcp__<server>__<prompt>`. These are dynamically discovered from connected servers and appear alongside built-in commands when you type `/`.

## Bash Mode

Prefix your input with `!` to run shell commands directly without Claude interpreting them:

```
! npm test
! git status
! ls -la
```

The command and its output are added to conversation context. Supports `Ctrl+B` backgrounding and history-based autocomplete (press Tab to complete from previous `!` commands).

## Tips

- Type `/` and start typing to fuzzy-filter commands
- Commands like `/compact` and `/clear` are your main tools for managing context window pressure
- `/doctor` is the first thing to try when something feels broken
- `/diff` shows both the full git diff and per-turn diffs. Use arrow keys to navigate
- `/btw` works even while Claude is mid-response, without interrupting it
- `/init` works on existing projects too. It suggests improvements rather than overwriting

## Explore Key Commands

Open the folders below to see detailed breakdowns of the most powerful built-in commands.
