# Claude Code SDK & GitHub Action

Beyond interactive use, Claude Code can be embedded into automated workflows — CI/CD pipelines, scheduled audits, and custom tooling.

## Claude Code SDK

The **SDK** lets you build custom agents that use Claude Code's tool infrastructure programmatically:

```typescript
import { ClaudeCode } from '@anthropic-ai/claude-code';

const agent = new ClaudeCode({
  model: 'claude-sonnet-4-6',
  systemPrompt: 'You are a contract compliance auditor...',
});

const result = await agent.run(
  'Review all contracts modified in the last 30 days for compliance with the new indemnification policy.'
);
```

### Legal Applications

| Use Case | What It Does |
|----------|-------------|
| **Batch compliance audit** | Scan all active contracts for a specific clause pattern |
| **Template validation** | Verify new templates match firm standards before publishing |
| **Citation checker** | Validate all Bluebook citations in a brief before filing |
| **Conflict detection** | Cross-reference new matters against existing client list |

The SDK is for building tools that run unattended — not interactive conversations.

## GitHub Action

The **Claude Code GitHub Action** runs Claude in a containerized environment triggered by GitHub events:

```yaml
# .github/workflows/contract-review.yml
on:
  pull_request:
    paths: ['templates/**']

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          prompt: |
            Review the template changes in this PR.
            Check for:
            - Missing standard clauses
            - Inconsistent defined terms
            - Deviations from firm indemnification policy
```

### Legal Applications

| Trigger | What Happens |
|---------|-------------|
| PR to `templates/` | Auto-review template changes for clause completeness |
| New matter created | Generate initial CLAUDE.md with jurisdiction defaults |
| Weekly schedule | Audit all active matter files for stale deadlines |
| Issue labeled "research" | Auto-generate preliminary research memo |

### Why This Matters

The GitHub Action gives you **auditable, automated legal review**. Every run is logged, every output is traceable, and the review happens consistently regardless of who made the change.

## When to Use What

| Tool | When |
|------|------|
| **Claude Code (interactive)** | Day-to-day legal work, drafting, analysis |
| **SDK** | Custom internal tools, batch processing |
| **GitHub Action** | Automated review gates in CI/CD pipelines |
