# Plan Mode

**Plan Mode** lets you align with Claude on an approach before any code gets written. Instead of Claude immediately editing files, it outlines a plan and waits for your approval.

## How It Works

Activate Plan Mode by typing `shift+tab` in Claude Code or starting your prompt with "plan":

```
> plan: How should we restructure the contract review pipeline to handle multi-jurisdiction matters?
```

Claude responds with a structured plan — files to change, approach, trade-offs — but **does not edit anything**. You review, adjust, and approve before implementation begins.

## Why Plan Mode Matters for Legal Work

Legal automation has high stakes. A bad refactor to your contract review pipeline could:
- Break existing matter workflows mid-review
- Lose jurisdiction-specific rules silently
- Introduce inconsistencies in template output

Plan Mode is your **motion for summary judgment** before trial — you want to know the outcome before committing resources.

### When to Use Plan Mode

| Scenario | Why |
|----------|-----|
| Restructuring the matter database schema | Changes affect every active matter |
| Adding a new jurisdiction skill | Need to verify it doesn't conflict with existing NY defaults |
| Modifying the confidentiality hook | False positives could block legitimate work |
| Updating contract templates | Changes propagate to all new matters |

### When to Skip Plan Mode

- Quick fixes to a single file
- Adding a new resource to the seed script
- Updating citation format in one memo

## The Workflow

```
1. Activate Plan Mode (shift+tab or "plan:")
2. Claude presents: files affected, approach, risks
3. You review and refine ("what about multi-state contracts?")
4. You approve ("go ahead" or shift+tab to exit plan mode)
5. Claude implements the approved plan
```

Plan Mode keeps you in the strategist role — directing, not reacting.
