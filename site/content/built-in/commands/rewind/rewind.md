# /rewind

Restores your conversation and code to a previous point in the session. Claude Code takes [checkpoints](^Automatic snapshots of your git state taken before Claude makes changes. Each checkpoint records the conversation turn and the working tree state) before making changes, so you can safely undo work and try a different approach.

## Usage

```
/rewind
```

No arguments. An interactive picker opens showing your conversation history.

You can also trigger rewind by pressing `Esc` twice.

## How It Works

1. Claude Code shows a list of conversation turns, each with a summary of what happened
2. You select the point you want to return to
3. Claude Code restores both:
   - **Conversation state**: messages after that point are removed
   - **Code state**: file changes made after that point are reverted via git
4. You continue the conversation from the restored point

## What Gets Restored

| Restored | Not Restored |
|---|---|
| File changes (via git checkout) | External side effects (API calls, sent messages) |
| Conversation history | Background task results |
| Task list state | Terminal output |

## Summarise Mode

Instead of rewinding, you can choose to **summarise** from a selected message. This compresses everything from that point forward into a summary, similar to `/compact` but starting from a specific turn.

## When to Use It

- Claude went down the wrong path and you want to try a different approach
- An edit broke something and you want to undo it cleanly
- You want to explore two different solutions from the same starting point (combine with `/fork`)
- You accidentally approved a change you did not want

## /rewind vs Git

`/rewind` is not a replacement for git. It uses git under the hood (reverting to a checkpoint commit), but it also restores conversation state. Use `/rewind` when you want to undo both the code changes and the conversation that produced them. Use `git checkout` or `git stash` when you only want to undo code changes.

## Tips

- Checkpoints are automatic. You do not need to create them manually
- `/rewind` works best for recent changes. For older history, use git directly
- Combine with `/diff` to inspect what each turn changed before deciding where to rewind to
- Press `Esc` twice as a quick shortcut instead of typing `/rewind`
