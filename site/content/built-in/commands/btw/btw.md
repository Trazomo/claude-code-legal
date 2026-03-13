# /btw

Ask a quick side question about your current work without adding to the conversation history. The question and answer appear in a dismissible overlay and never enter the main context.

## Usage

```
/btw what was the name of that config file again?
/btw what does the second argument to this function do?
/btw why did you choose that approach?
```

## How It Works

1. You type `/btw` followed by your question
2. Claude answers using everything already in the current conversation context
3. The answer appears in an overlay. Press Space, Enter, or Escape to dismiss
4. Neither the question nor the answer is added to conversation history

## Key Properties

| Property | Detail |
|---|---|
| Conversation visibility | Full. Can reference anything Claude has already seen this session |
| Tool access | None. Cannot read files, run commands, or search |
| Follow-up turns | None. Single question, single answer |
| Cost | Minimal. Reuses the parent conversation's [prompt cache](^A cache that stores the conversation prefix so repeated requests avoid re-processing the same tokens) |
| Works mid-response | Yes. Runs independently without interrupting Claude's current turn |

## /btw vs Subagents

`/btw` is the inverse of a [subagent](^An isolated Claude instance with its own context and tools. See the agents section for details):

| | /btw | Subagent |
|---|---|---|
| Context | Full conversation | Starts empty |
| Tools | None | Full tool access |
| Best for | Asking about what Claude already knows | Going out to find something new |

## When to Use It

- You need a quick answer but do not want to derail a long-running task
- You want to reference something Claude said earlier without cluttering context
- You are mid-conversation and want to check a detail without breaking flow
