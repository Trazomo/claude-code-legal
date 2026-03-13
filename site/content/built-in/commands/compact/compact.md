# /compact

Compresses your conversation to reclaim context window space. Claude summarises the conversation so far, discards the original messages, and continues with the summary as its new starting point.

## Usage

```
/compact
/compact focus on the database migration work
/compact keep the API design decisions, drop the debugging
```

## How It Works

1. Claude reads the full conversation history
2. It generates a compressed summary, preserving key decisions, code context, and task state
3. The original messages are replaced with the summary
4. `CLAUDE.md` is re-read from disk and re-injected fresh
5. The conversation continues with the summary as context

Optional focus instructions guide what to prioritise in the summary. Without them, Claude uses its own judgement about what matters most.

## What Survives Compaction

| Preserved | Lost |
|---|---|
| `CLAUDE.md` content (re-loaded from disk) | Exact wording of earlier messages |
| Key decisions and reasoning | Verbose tool output and debug logs |
| Current task state and progress | Intermediate exploration steps |
| Code snippets Claude is actively working with | Conversation tone and nuance |
| Task list items | One-off instructions given only in chat |

## When to Use It

- The context window is getting full and Claude warns about capacity
- You are switching focus within the same session and want to shed old context
- Claude starts "forgetting" earlier instructions or repeating itself
- After a long debugging session, before starting implementation

## /compact vs /clear

| | /compact | /clear |
|---|---|---|
| Conversation history | Summarised and kept | Deleted entirely |
| `CLAUDE.md` | Re-loaded | Re-loaded |
| Task continuity | Preserved in summary | Lost |
| Best for | Reclaiming space mid-task | Starting a completely new task |

## Tips

- Anything you want Claude to remember permanently belongs in `CLAUDE.md`, not in conversation. `/compact` preserves CLAUDE.md; it does not preserve one-off chat instructions
- Focus instructions help when your conversation covered multiple topics but you only care about one going forward
- Context compaction also happens automatically when the window fills up. `/compact` lets you trigger it on your terms with guidance about what to keep
