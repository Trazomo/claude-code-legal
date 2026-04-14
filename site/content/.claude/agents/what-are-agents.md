# What Are Agents?

**Agents** are specialized sub-agents that Claude dispatches to handle focused tasks. Instead of one Claude doing everything, you define experts that work in sequence or parallel.

## How They Work

Each agent is a markdown file in `.claude/agents/` with frontmatter defining its role and tools:

```yaml
---
name: contract-reviewer
description: Extract key terms and risk-rate contract provisions
tools: Read, Grep, Glob
---
```

The main Claude session dispatches agents like a partner delegating to associates. Each agent has:
- A defined **role** (what it specializes in)
- Limited **tools** (what it can access)
- A clear **output format** (what it produces)

## Why Agents Matter for Legal Work

Contract review is a pipeline, not a single task:

1. **Contract Reviewer** — extracts terms, risk-rates provisions, flags gaps
2. **Research Assistant** — verifies claims against case law and statutes
3. **Memo Drafter** — synthesizes everything into a client-ready memorandum

Each agent focuses on what it does best. The reviewer doesn't need web search. The researcher doesn't need to write memos. The drafter doesn't need to parse contracts.

This mirrors how a law firm actually works — different roles, clear handoffs, structured output.

## Files in This Folder

- **contract-reviewer.md** — Extracts defined terms, risk-rates provisions, flags missing clauses
- **research-assistant.md** — Verifies legal claims, finds supporting authority, flags unsettled law
- **memo-drafter.md** — Synthesizes analysis into an IRAC memorandum for partner review
