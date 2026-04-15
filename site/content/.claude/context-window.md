# Context Window & Token Management

Claude Code operates within a **context window** — the total amount of text Claude can see at once. Managing it well is the difference between a productive session and a confused one.

## What's in the Context Window

```
┌─────────────────────────────────────────┐
│ System prompt + CLAUDE.md          ~5%  │
│ Rules (loaded for current files)   ~2%  │
│ Skills (loaded on demand)          ~3%  │
│ Conversation history              ~40%  │
│ File contents being reviewed      ~30%  │
│ Available for new work            ~20%  │
└─────────────────────────────────────────┘
```

The `/context` command shows the actual breakdown:

```
claude > /context
  System prompt:     8,200 tokens
  CLAUDE.md:         2,400 tokens
  Rules:             1,800 tokens
  Conversation:     82,000 tokens
  Files:            61,000 tokens
  Available:        44,600 tokens
  Total:           200,000 tokens
```

## Why This Matters for Legal Work

### Long Documents

A 50-page contract is ~25,000 tokens. A full brief with exhibits can be 80,000+. If your conversation history is already 100,000 tokens, there's not enough room to load the document.

### Managing Context

| Command | What It Does | When to Use |
|---------|-------------|-------------|
| `/compact` | Compress conversation history, keep key facts | When context is >75% full |
| `/clear` | Wipe conversation, start fresh | When switching matters |
| `/context` | Show token breakdown | Before loading a large document |

### Practical Tips

1. **Start fresh per matter** — Don't carry one session across multiple client matters
2. **Use `/clear` between matters** — Prevents context bleed and confidentiality risk
3. **Load documents strategically** — Review a contract section by section, not all at once
4. **Let `/compact` summarize** — When context gets full, compact preserves key findings while freeing space
5. **Use sub-agents for large tasks** — Each sub-agent gets its own context window
