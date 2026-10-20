# Contributing

Help make this developer portfolio template easier to personalize, navigate, and maintain. Useful contributions include accessibility improvements, responsive layout fixes, clearer documentation, and reproducible bug fixes.

Participation follows the [Code of Conduct](CODE_OF_CONDUCT.md). Report vulnerabilities privately as described in [SECURITY.md](SECURITY.md).

## Before starting

Search existing issues and pull requests in [the repository](https://github.com/abdulrdeveloper/abdul-portfolio-tamplate). Discuss substantial design, dependency, or architecture changes before implementing them. Keep fixes focused and preserve unrelated work.

Use your own fork for personal profile replacements. Changes to the shared template should preserve its purpose and avoid introducing someone else's personal claims or contact details.

## Local setup

Install Node.js 20.9 or newer and npm. From your cloned repository:

```bash
npm ci
git switch -c fix/describe-your-change
npm run dev
```

Open `http://localhost:3000`. No environment file, database, or API token is required. Dependency installation and build-time Google font downloads need network access.

Read the README's [structure and code connections](README.md#structure) for the connections between routes, content, components, and external requests.

## Project conventions

- Keep editable content in the clearly named `utils/site.ts`, `utils/profile.ts`, `utils/projects.ts`, and `utils/blog.ts` files. Use shared types in `types/index.ts`.
- Keep static homepage sections together in `app/page.tsx`. Add a separate component when UI is reused or needs its own browser state and effects. Keep external requests in `services/`.
- Reuse existing UI components and theme tokens. Check both light and dark appearances.
- Preserve keyboard navigation, visible focus, useful image alternatives, semantic headings, and reduced-motion handling.
- Keep pages compatible with static export. New server-only runtime features require an explicit architecture discussion.
- Keep project slugs unique. Check project links, generated pages, metadata, sitemap entries, and logos together.
- Blog cards link to external articles; they do not create local article pages or sync automatically.
- Never commit credentials, private documents, or personal information without permission. Everything in `public/` is publishable.
- Preserve third-party icon license notices. Adding an asset requires permission to redistribute it.

## Check your changes

```bash
npm run lint
npm run build
git diff --check
```

The build exports the site into `out/`. There is no automated test script in the current package manifest.

For UI changes, check narrow and wide screens, both themes, keyboard focus, internal navigation, and any affected contact or external links. For GitHub activity changes, check loading, partial failure, and unavailable-data behavior. For documentation-only changes, verify links, examples, and whitespace; an application build is usually unnecessary.

## Pull requests

Explain the problem, resulting behavior, and checks you performed. Include before/after screenshots when a visual change benefits from them. Use a descriptive title, reference related issues, and disclose any checks you could not run.

Do not commit generated `out/`, `.next/`, or `node_modules/` directories. Submit changes to the repository's `main` branch through a pull request.

Contributions to the template are provided under its [MIT License](LICENSE). Retain existing copyright and third-party notices.
