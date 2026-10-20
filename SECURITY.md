# Security policy

## Scope

This repository contains a statically exported developer portfolio template. It has no application authentication, database, or contact-submission API. Contact links open external services or an email client.

The browser requests public profile data from GitHub and contribution data from `github-contributions-api.jogruber.de`. Dependencies, browser-side code, generated HTML, external links, and published assets are relevant security surfaces.

## Reporting a vulnerability

Email [hire@abdulrdeveloper.me](mailto:hire@abdulrdeveloper.me) with the subject `Portfolio security report`. Do not publish an exploit, sensitive reproduction details, credentials, or private data in an issue or pull request before the maintainer has reviewed the report.

Include:

- Affected commit or branch and the relevant file, route, or dependency.
- A description of the issue and its practical impact.
- Minimal reproduction steps, preferably against a local copy.
- Redacted logs or screenshots if they help demonstrate the issue.
- A suggested fix, if available.

Send only the information needed to investigate. Response and resolution times are not guaranteed. If the report concerns an external provider rather than this template, use that provider's reporting process.

## Versions and fixes

The current `main` branch is the maintenance baseline. This project does not publish a separate security support schedule or promise fixes for historical commits and customized forks. Check whether an issue still exists on current `main`; fork owners need to review and apply relevant updates themselves.

## Safe investigation

Test against a local copy or systems you own and are authorized to assess. Do not access other people's data, disrupt services, perform destructive testing, or exceed an external provider's permitted usage. Stop if you encounter private data and report only a redacted description.

## Contributor precautions

- Never put secrets in source files, browser bundles, documentation, or `public/`.
- Review external URLs and third-party assets before adding them.
- Validate external response data and preserve error handling in `services/github.ts`.
- Review dependency updates and the lockfile; a successful build alone is not a security audit.
- Keep private vulnerability discussion separate from public bug reports.

Owners who reuse the template should replace this reporting contact with their own before publication.
