# Contributing

Thanks for helping improve Abdul Rahman's portfolio. Useful contributions include bug fixes, accessibility improvements, clearer documentation, and improvements to the static site and its GitHub activity display.

This is a personal portfolio. Discuss substantial design changes, new dependencies, or changes to the owner's profile and project claims before implementing them. Follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Choose the right channel

- For a reproducible bug or a focused feature proposal, open a [GitHub issue](https://github.com/abdulrdeveloper/abdul-portfolio-tamplate/issues).
- For setup or deployment help, read [Support](SUPPORT.md).
- For a suspected vulnerability, follow the private reporting instructions in [Security](SECURITY.md).

Search existing issues and pull requests before opening a new one. Include the affected page, steps to reproduce, expected and actual behavior, and browser details when relevant. Redact personal information from screenshots and logs.

## Local setup

Use Node.js 20.9 or newer and npm. Fork the repository, clone your fork, and create a focused branch:

```bash
git switch -c fix/describe-the-change
npm ci
npm run dev
```

The application opens at [localhost:3000](http://localhost:3000). No API token, database, or environment file is required. See the [README](README.md) for architecture, content locations, and deployment instructions.

## Make the change

- Keep a pull request focused on one problem. Follow the existing TypeScript, component, and Tailwind conventions.
- Update profile and project content in `constants/` where possible. Keep the displayed content, metadata, and structured data consistent.
- Keep static export working. Do not add server-only routes, runtime secrets, or an application backend without discussing the change.
- Preserve keyboard access, labels, focus states, light/dark themes, and reduced-motion behavior when changing UI.
- Keep external resources and local asset paths accurate. Retain third-party copyright and license notices.
- Use the existing npm lockfile for npm work. If dependencies change, keep `package.json` and `package-lock.json` consistent and explain the change. Do not regenerate the alternate pnpm lockfile incidentally.
- Keep unrelated generated output, dependency folders, credentials, personal documents, and local editor settings out of the diff.

## Validate

For application changes, run:

```bash
npm run lint
npm run build
git diff --check
```

The build checks TypeScript and exports the site to `out/`. This repository currently has no automated test script. Include the manual verification relevant to your change: for example, theme switching, keyboard navigation, a narrow viewport, project links, article links, or GitHub loading/error states.

For documentation-only changes, verify file paths, commands, links, and Markdown formatting, and run `git diff --check`. A production build is not required just to edit prose.

## Submit a pull request

Target `main`. Explain the problem, resulting behavior, and how you checked the change. Include before/after screenshots for visible UI changes when practical. Mention any dependency changes or limits in your verification.

Use clear commit messages describing the change, such as `fix: preserve calendar layout on small screens`. Avoid unrelated formatting and generated-file changes so the patch is easy to review.

Contribute only material you are entitled to share, and preserve existing attribution. The project license is in [LICENSE](LICENSE); bundled icon assets retain their separate notices listed in the [README](README.md#attribution-and-licensing).
