# /diff

Opens an interactive diff viewer showing uncommitted changes in your working directory and per-turn diffs from Claude's edits.

## Usage

```
/diff
```

No arguments. The viewer opens immediately.

## How It Works

1. `/diff` launches a terminal-based diff viewer
2. Use **left/right arrows** to switch between two views:
   - **Git diff**: all uncommitted changes in the working directory
   - **Turn diffs**: changes Claude made in each individual turn
3. Use **up/down arrows** to browse files within the current view
4. Press Escape or `q` to close

## Two Views

| View | What It Shows | Useful For |
|---|---|---|
| Git diff | All uncommitted changes (staged and unstaged) | Reviewing everything before a commit |
| Turn diffs | Changes from each Claude turn, individually | Understanding what Claude changed and when |

## When to Use It

- Before committing, to review all changes Claude has made
- To understand which turn introduced a specific change
- To verify Claude edited the right files before moving on
- When you want a quick visual check without leaving the session

## Tips

- `/diff` shows the same information as `git diff` but in an interactive, navigable viewer
- Turn diffs are especially helpful after long sessions with many edits, where `git diff` alone does not tell you which step changed what
- Combine with `/rewind` if you spot a change you want to undo: use `/diff` to find the turn, then `/rewind` to roll back to it
