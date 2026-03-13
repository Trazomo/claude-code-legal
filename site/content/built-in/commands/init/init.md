# /init

Analyses your codebase and generates a starter `CLAUDE.md` file. This is the fastest way to give Claude persistent context about your project.

## Usage

```
/init
```

No arguments. Claude examines your project and drafts the file.

## How It Works

1. Claude scans your project structure, config files, READMEs, and build scripts
2. It drafts a `CLAUDE.md` covering: project overview, tech stack, build and test commands, code conventions, and common workflows
3. The draft opens for your review
4. You edit, approve, and commit it to version control

## What It Generates

A typical `/init` output includes:

- **Project overview**: what the project is, its tech stack, key directories
- **Build and test commands**: how to build, test, lint, and deploy
- **Code conventions**: naming, imports, error handling patterns it detected
- **Common workflows**: branch naming, PR process, deploy steps
- **Gotchas**: quirks or requirements it noticed

## On Existing Projects

`/init` works on projects that already have a `CLAUDE.md`. Instead of overwriting, it:

- Analyses what is already there
- Suggests additions and improvements
- Preserves your existing instructions

This makes it useful for periodic maintenance: run `/init` after major changes to see if Claude spots new conventions or workflows worth documenting.

## When to Use It

- Setting up Claude Code on a new project for the first time
- Onboarding a team member who wants a quick `CLAUDE.md` starting point
- After a major refactor or tech stack change, to refresh project context
- When Claude keeps making the same mistake and you want to add a rule

## Tips

- Review what `/init` generates carefully. It is a starting point, not a final product
- Add what Claude cannot infer on its own: deployment URLs, team conventions, known pitfalls
- Keep `CLAUDE.md` under 200 lines. Move detailed material to `@imported` files
- Commit to version control so your whole team shares the same context
