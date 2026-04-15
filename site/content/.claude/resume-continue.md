# Resume & Continue

**Resume** and **Continue** let you pick up where you left off. Close your terminal, come back hours later, and continue the same conversation with full context.

## How It Works

```bash
# Continue the most recent session
claude --continue

# Resume and browse previous sessions
claude --resume
```

- **`--continue`** — Immediately reopens your last session. Context, files, and conversation history are restored.
- **`--resume`** — Shows a list of recent sessions so you can pick which one to reopen.

## Why This Matters for Legal Work

### Multi-day Matter Reviews

Contract reviews don't happen in one sitting. You might:
1. Start the initial clause analysis on Monday
2. Send questions to the client on Tuesday
3. Resume with new facts on Wednesday

With `--continue`, Claude remembers: the contract it was reviewing, the risk flags it identified, and the questions it was waiting for answers to.

### Context Preservation

Claude retains:
- Which files were being reviewed
- The analysis completed so far
- Your feedback and corrections ("no, the governing law is Delaware, not NY")
- The CLAUDE.md and rules that were loaded

Without resume, you'd have to re-explain the entire matter context every session.

### Practical Pattern

```bash
# Morning: start contract review
claude
> /review-contract /matters/acme/msa.pdf
# ... work through issues, break for a meeting ...

# Afternoon: continue where you left off
claude --continue
> Now address the IP assignment clause I flagged earlier
# Claude remembers the flag and continues from there
```

## Tips

- **Use `--continue` for the same task**, `--resume` to switch between matters
- **Context compresses over time** — if a session is very old, start fresh and reference the memo output instead
- **Each matter should be its own session** — don't mix client contexts in one session
