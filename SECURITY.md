# Security

## Report a vulnerability privately

Email [hire@abdulrdeveloper.me](mailto:hire@abdulrdeveloper.me) with the subject `Portfolio security report`.

Do not publish exploit details, sensitive data, credentials, or a working attack in a public issue or pull request. GitHub private vulnerability reporting is not currently enabled for this repository; email is the reporting route documented here.

Include:

- The affected URL or file and the commit SHA, if known.
- A description of the issue and its impact.
- Minimal reproduction steps using your own data or a local copy.
- A suggested fix, if available.

Remove secrets and other people's information from your report. Coordinate disclosure with the maintainer so a fix can be assessed before details become public. This project does not promise a response deadline or a bounty.

## Scope

Reports should identify whether the issue affects the current `main` branch, a specific historical commit, or the deployed site. There are no separately maintained release branches or a documented long-term support schedule.

Relevant surfaces include the generated site, client-side code, structured-data rendering, dependency/build tooling, and configuration in this repository. External project demos, GitHub, the contribution-calendar provider, and hosting-provider systems are separate services; issues in those services should be reported to their owners.

The portfolio is a static export. It does not implement accounts, a database, payments, or a private application API. Public GitHub data is fetched in the browser without an access token. A temporary provider failure or stale contribution count is normally a [support issue](SUPPORT.md), rather than evidence of a security vulnerability.

## Check safely

Prefer a local checkout for reproduction. Do not access another person's data, overwhelm the public site or providers, bypass third-party access controls, or run destructive tests. The existence of this policy does not authorize testing third-party infrastructure.

## Deployment practices

- Never commit credentials or put private tokens in client-side code or public assets. Exported files can be read by visitors.
- Review dependency and lockfile changes, and rebuild the deployed artifact after applying fixes.
- Configure HTTPS, response headers, redirects, and access to deployment credentials with the hosting provider; this repository does not configure those controls automatically.
- Before sharing logs or screenshots, remove secrets and personal information.

Use the [README](README.md#deploy) for the actual build and export workflow. These practices describe the expected maintenance approach, not a claim that the project has undergone a security audit.
