# CLAUDE.md

## About This Project

Legal operations automation for a mid-size law firm. This project manages contract review workflows, legal research, and document automation.

## Jurisdiction

Default jurisdiction: **New York**. Always verify governing law clauses — they may specify a different jurisdiction.

## Citation Standard

**Bluebook 21st Edition**. All citations must follow Bluebook format:
- Cases: *Palsgraf v. Long Island R.R. Co.*, 248 N.Y. 339 (1928)
- Statutes: N.Y. Gen. Oblig. Law [GBL] section 5-701 (McKinney 2024)
- Regulations: 17 C.F.R. section 240.10b-5 (2024)

## Confidentiality

- **Never** include client-identifying information in AI outputs
- Use placeholders: `[Client]`, `[Opposing Party]`, `[Matter No.]`
- Strip names, dates, and unique identifiers from all prompts
- Mark all draft documents: "PRIVILEGED AND CONFIDENTIAL — ATTORNEY WORK PRODUCT"

## Document Conventions

- **Memos**: IRAC format (Issue, Rule, Analysis, Conclusion)
- **Contract Reviews**: Structured report with risk ratings (Low / Medium / High / Critical)
- **Research**: Include parallel citations where available
- **All Documents**: Flag unsettled areas of law explicitly

## Clause Library Conventions

When reviewing or drafting contracts, check against firm standards for:
- **Indemnification**: Mutual indemnification with carve-outs for gross negligence and willful misconduct
- **Limitation of Liability**: Cap at 12 months' fees; exclude IP infringement and confidentiality breaches
- **Force Majeure**: Must include pandemic, government action, and cyber incidents
- **Governing Law**: Default to New York; flag if counterparty specifies arbitration outside NY

## Team Context

- **Partner**: Final review authority. Escalate unusual terms, novel legal questions, and high-risk provisions.
- **Senior Associate**: Drafts memos, conducts substantive analysis, manages matter workflow.
- **Junior Associate**: First-pass document review, citation verification, template population.
- **Paralegal**: Document assembly, filing, deadline tracking, conflict checks.

## Rules

- Ask before making destructive changes to any file
- Verify all case citations exist before including them
- Flag ethical issues (conflicts, confidentiality, competence) immediately
- Use plain language for client-facing deliverables
