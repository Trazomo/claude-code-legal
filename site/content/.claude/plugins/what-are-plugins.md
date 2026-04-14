# What Are Plugins?

**Plugins** package skills, agents, hooks, and commands into a single shareable extension. Instead of copying files between projects, you install a plugin and get everything at once.

## How They Work

A plugin is a directory with a `plugin.json` manifest that declares its components:

```json
{
  "name": "legal-ops-toolkit",
  "skills": [...],
  "agents": [...],
  "hooks": [...],
  "commands": [...]
}
```

Install a plugin and Claude gains all its capabilities — jurisdiction knowledge, review agents, confidentiality guards — without manual setup.

## Why Plugins Matter for Legal Work

Law firms need consistency across matters and attorneys. A plugin ensures:
- Every associate uses the same **contract review pipeline**
- Every project has the same **confidentiality hooks**
- Every memo follows the same **jurisdiction skill** and citation format

One plugin, installed once, enforced everywhere.

## Files in This Folder

- **legal-ops-toolkit/** — Plugin bundling NY jurisdiction skill, 3 contract review agents, 2 hooks, and 2 commands
