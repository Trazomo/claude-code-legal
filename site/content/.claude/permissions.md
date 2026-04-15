# Permissions & Accepting Edits

**Permissions** control what Claude can and cannot do. Every tool call — reading a file, writing code, running a command — goes through the permission system. You approve or reject each action.

## How It Works

When Claude wants to perform an action, you see a prompt:

```
Claude wants to: Edit file /matters/acme/contract.md
[Allow] [Deny] [Allow for session]
```

You choose:
- **Allow** — approve this one action
- **Deny** — block it (Claude adjusts its approach)
- **Allow for session** — approve this action type for the rest of the session

## Permission Levels

Configure in `.claude/settings.json` or interactively:

| Level | What Claude Can Do | Best For |
|-------|-------------------|----------|
| **Ask every time** | Nothing without your approval | Sensitive matters, first-time workflows |
| **Auto-allow reads** | Read files freely, ask for writes | Day-to-day work with existing projects |
| **Auto-allow all** | Full autonomy | Trusted workflows with hooks as guardrails |

## Why Permissions Matter for Legal Work

### Client Data Isolation

Permissions scope Claude's access to specific directories:

```json
{
  "allow": ["Read /matters/acme/**", "Write /matters/acme/**"],
  "deny": ["Read /matters/other-client/**"]
}
```

This prevents accidental cross-contamination between client matters — an ethical obligation, not just a convenience.

### Shell Command Safety

Block shell commands that could leak data:

```json
{
  "deny": ["Bash curl *", "Bash wget *", "Bash ssh *"]
}
```

Even if Claude thinks it needs to fetch something from the internet, the permission system stops it.

### Accept/Reject Edits

When Claude proposes a file edit, you see a diff:

```diff
- Each Party shall indemnify the other against claims.
+ Each Party shall indemnify the other against claims,
+ provided that aggregate liability shall not exceed
+ twelve (12) months' fees.
```

You review the exact change before it's applied. For legal templates, this review step is non-negotiable — one wrong clause can affect every future contract.

## Practical Setup for Law Firms

**Junior associates**: Ask every time — learning the workflow, need oversight
**Senior associates**: Auto-allow reads, ask for writes — trusted to review diffs
**Automation scripts**: Auto-allow all + hooks — deterministic guardrails instead of human review
