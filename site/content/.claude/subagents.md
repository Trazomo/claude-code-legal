# Sub-agents & Parallel Work

**Sub-agents** are specialized Claude instances dispatched to handle focused tasks. The main Claude session acts as a partner delegating to associates — each sub-agent has a defined role, limited tools, and a clear deliverable.

## How Sub-agents Work

When Claude encounters a complex task, it can spawn sub-agents:

```
Main Session (Partner)
  ├── contract-reviewer (Senior Associate)
  │     → Reads contract, extracts terms, risk-rates provisions
  ├── research-assistant (Research Specialist)  
  │     → Verifies claims against case law and statutes
  └── memo-drafter (Junior Associate)
        → Synthesizes everything into client-ready memo
```

Each sub-agent:
- Gets its own context window (isolated from others)
- Has access only to tools specified in its agent definition
- Returns a structured result to the parent session

## Defining Sub-agents

Create agent definitions in `.claude/agents/`:

```yaml
---
name: contract-reviewer
description: Extract key terms and risk-rate provisions
tools: Read, Grep, Glob
---

You are a senior contracts attorney. Review the contract and...
```

The `tools` field limits what the sub-agent can do. A research assistant gets `WebSearch` — a memo drafter does not.

## Why Sub-agents Matter for Legal Work

### Division of Labor

Legal work naturally decomposes into specialized roles:

| Agent | Analogous Role | What It Does |
|-------|---------------|-------------|
| `contract-reviewer` | Senior Associate | First-pass analysis, risk identification |
| `research-assistant` | Research Librarian | Authority verification, case law search |
| `memo-drafter` | Junior Associate | Synthesis, formatting, deliverable production |

### Context Isolation

Each sub-agent has its own context window. This means:
- The research assistant doesn't see the full contract (only the specific claims to verify)
- The memo drafter doesn't see the raw research notes (only the curated findings)
- Each agent focuses on its task without distraction

### Parallel Execution

Sub-agents can run simultaneously. While the research assistant verifies a citation, the contract reviewer can continue analyzing the next section. This mirrors how a well-run matter team operates.

## When to Use Sub-agents vs. a Single Session

| Use Sub-agents | Use Single Session |
|---------------|-------------------|
| Multi-step pipeline with handoffs | Quick single-task question |
| Tasks requiring different tool access | All work in one file |
| Long-running analysis that benefits from specialization | Short conversation |
| Work product that needs clear role attribution | Exploratory research |

## Caution

Don't over-decompose. If a task is simple enough for one session, adding three sub-agents creates overhead without benefit. Sub-agents shine when the task is genuinely multi-step and benefits from role specialization — like a contract review pipeline, not a single memo edit.
