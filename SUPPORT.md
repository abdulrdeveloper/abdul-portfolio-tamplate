# Support

Start with the [README](README.md) for local setup, editable content, routes, GitHub activity, and static deployment.

## Where to ask

| Need | Channel |
| --- | --- |
| Reproducible bug or feature request | [GitHub issues](https://github.com/abdulrdeveloper/abdul-portfolio-tamplate/issues) |
| Contribution or pull request guidance | [Contributing](CONTRIBUTING.md) |
| Suspected vulnerability | Private reporting in [Security](SECURITY.md) |
| Conduct concern | Private contact in [Code of Conduct](CODE_OF_CONDUCT.md) |
| Personal or collaboration inquiry | Contact links on the portfolio |

This is a personal project without a guaranteed support response time.

## Include useful details

For setup, build, or UI problems, include the commit SHA, operating system, Node/npm versions, affected route, exact command or reproduction steps, and relevant error output. For visual issues, include the browser and viewport size, plus a screenshot when useful. Remove credentials and personal information before sharing logs.

## Common checks

**The site does not start locally.** Use Node.js 20.9 or newer, install from the lockfile with `npm ci`, then run `npm run dev` from the repository root. There is no required database or `.env` file.

**The build cannot download fonts.** The layout uses `next/font/google`. Check the build environment's network access to Google font resources and include the actual error in your report.

**GitHub counts are unavailable or look delayed.** Verify the profile URL in `constants/site.ts`. The browser requests GitHub's public profile API and a separate contribution-calendar API. Rate limits, provider caching, network failures, or outages can affect the result. Reloading retries the requests; the [README](README.md#github-activity) describes the refresh interval and fallback behavior.

**A newly published article is missing.** Article previews are maintained in `constants/blog.ts`; the site does not poll the blog feed. Add the entry, rebuild, and redeploy.

**A route works through navigation but fails when opened directly.** Check that the static host resolves clean URLs to the exported HTML files and serves `404.html` for unknown routes. Upload the complete `out/` directory contents, including `/_next/` assets.

**Metadata, images, or the CV are outdated after an edit.** Rebuild and deploy the updated `out/` contents. Check that referenced public files exist and that the hosting or social-preview cache is not serving an earlier version.
