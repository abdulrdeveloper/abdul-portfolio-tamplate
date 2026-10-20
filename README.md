# Developer Portfolio Template

A customizable portfolio template for developers who want to showcase their projects, experience, education, and technical writing.

Built with **Next.js, TypeScript, and Tailwind CSS**, with static export support and editable content files.

The included profile demonstrates the template. Replace it with your own details before publishing.

## Features

- Responsive layouts with light and dark themes.
- Introduction, skills, experience, and education sections.
- Project collection with individual project pages.
- Blog previews linking to externally published articles.
- Live GitHub follower count and contribution calendar.
- Social links, contact information, and a PDF CV link.
- Page metadata, social sharing cards, structured data, sitemap, and robots file.
- Keyboard focus indicators, skip navigation, and reduced-motion handling.
- Static deployment without an application backend or database.

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 and React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Themes | next-themes |
| Content | Local TypeScript files |
| Deployment | Static export |

## Quick start

Use Node.js **20.9 or newer** and npm.

Fork this repository, then clone your fork. Alternatively, clone the template directly:

```bash
git clone https://github.com/abdulrdeveloper/abdul-portfolio-tamplate.git
cd abdul-portfolio-tamplate
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

No API keys, database, or environment file are required. Installing dependencies and downloading Google fonts during builds requires network access.

## Make it yours

| Update | File or directory |
| --- | --- |
| Name, handle, role, location, domain, email, navigation, and social links | [`utils/site.ts`](utils/site.ts) |
| Biography facts, featured-project reference, skills, experience, and education | [`utils/profile.ts`](utils/profile.ts) |
| Projects, technologies, features, and demo/source links | [`utils/projects.ts`](utils/projects.ts) |
| Blog previews and external article links | [`utils/blog.ts`](utils/blog.ts) |
| All homepage sections: text, markup, spacing, and order | [`app/page.tsx`](app/page.tsx) |
| Complete header: brand, navigation, theme button and provider | [`components/Header.tsx`](components/Header.tsx) |
| Live GitHub stats and calendar | [`components/GitHubActivity.tsx`](components/GitHubActivity.tsx) |
| Common shell, fonts, footer, and default metadata | [`app/layout.tsx`](app/layout.tsx) |
| Profile photo | `public/avatar.png` |
| Favicon | `public/favicon.png` |
| CV | `public/Abdul_Rahman_CV.pdf` |
| Project and organization logos | `public/assets/` |
| Social sharing artwork | `public/og-image.svg` and `public/og-image.png` |

### Personalization checklist

- Replace the example identity, biography, contact links, and CV.
- Add only your own projects, skills, education, and experience.
- Remove unused sections from [`app/page.tsx`](app/page.tsx).
- Set your deployed domain in `utils/site.ts`.
- Update your GitHub profile URL to load your activity.
- Replace the avatar, favicon, logos, and sharing artwork.
- Review page descriptions and structured data. Identity fields use the shared site configuration.
- Search the source for `Abdul Rahman`, `abdulrdeveloper`, and `Spurvance` to catch remaining example content.

Shared names, handle, role, location, contact labels, and metadata identity fields use `utils/site.ts`. Biography facts and the About section's featured-project reference use `utils/profile.ts`; the project name and URL come from `utils/projects.ts`. Review the introductory paragraphs in `app/page.tsx`, page descriptions, artwork, CV, and documentation when personalizing the template.

This repository uses npm. Keep `package-lock.json` in sync with dependency changes and use `npm ci` for reproducible installation.

Editing the sharing SVG does not automatically regenerate its PNG.

### Projects

Edit `utils/projects.ts` to add or remove projects. Each project entry generates a detail page at `/projects/[slug]`.

Update its description, technologies, features, logo, demo URL, and source URL. Rebuild after changing project entries.

### Blog previews

Edit `utils/blog.ts` with your article titles, descriptions, publication dates, and URLs.

Entries are sorted newest first. The homepage shows the latest three, while `/blog` lists all previews. Full articles open on your external blog.

Article previews are maintained manually; publishing an article elsewhere does not automatically update the portfolio.

### CV

Replace `public/Abdul_Rahman_CV.pdf` with your own document. If you rename it, update the CV link in `utils/site.ts`.

## GitHub integration

The template fetches public follower data from GitHub and contribution data from a separate contribution-calendar provider.

The username is derived from your GitHub URL in `utils/site.ts`. No token is required.

Activity loads in the browser and refreshes every 24 hours while the page remains open. Loading, unavailable, and failed-refresh states are included. Provider caching and rate limits can affect the displayed data.

## Routes

| Route | Content |
| --- | --- |
| `/` | Main portfolio |
| `/projects` | Project collection |
| `/projects/[slug]` | Project details |
| `/blog` | External article previews |
| `/robots.txt` | Crawler rules |
| `/sitemap.xml` | Generated sitemap |

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Check TypeScript, build, and export the site |

## SEO configuration

The template includes default and page-specific metadata, canonical URLs, social sharing metadata, and JSON-LD structured data.

Review:

- [`app/layout.tsx`](app/layout.tsx) for default metadata.
- Project and blog pages for page-specific metadata.
- [`utils/seo.tsx`](utils/seo.tsx) for structured data.
- [`app/sitemap.ts`](app/sitemap.ts) and [`app/robots.ts`](app/robots.ts) for crawl configuration.

Set your own domain and identity before deployment. Search Console verification is not preconfigured.

## Deploy

```bash
npm ci
npm run lint
npm run build
```

Publish the contents of **`out/`** to a static host.

Configure the host to resolve clean URLs to their exported HTML files and serve `404.html` with a 404 status for unknown routes. Include all generated assets.

The template uses root-relative URLs and is configured for deployment at a domain root. Hosting under a repository subdirectory requires additional configuration.

For Vercel, [vercel.json](vercel.json) explicitly selects the Other preset, installs with `npm ci`, builds with `npm run build`, and publishes `out/` with clean URLs. This deploys the Next.js static export and overrides a stale output directory such as `dist` in project settings. Set Vercel's Root Directory to the folder containing `package.json` and `vercel.json`, and deploy a commit that includes this configuration.

The repository does not include a hosting deployment workflow. For other hosts, configure the build command and output directory explicitly. Manage the domain, HTTPS, redirects, and caching in the chosen host. Rebuild and redeploy after editing local content, metadata, images, or the CV.

No running Next.js server or `npm start` command is required.

## Structure

```text
app/             Pages; homepage sections live together in app/page.tsx
components/      Flat folder for the header, GitHub activity, and reused UI
utils/           Clearly named content files, helpers, and SEO schemas
services/        External GitHub and contribution-calendar requests
public/          Images, icons, logos, and CV
types/           Shared content types and the CSS import declaration
```

### How the files connect

`app/layout.tsx` supplies the header, theme provider, fonts, footer, and default metadata to every page. `app/page.tsx` contains the homepage section functions in display order. It imports editable data from `utils/`, reused UI from `components/`, and the browser-only GitHub activity component. The header's navigation and theme controls stay together in `components/Header.tsx`.

Project and blog routes reuse the same project grid, article cards, and content files as the homepage. `components/GitHubActivity.tsx` calls `services/github.ts` for live data. `utils/seo.tsx` supplies structured data; sitemap and robots remain in `app/` so Next.js generates their routes.

The homepage and page metadata stay server-rendered and statically exported. Browser state, effects, and theme interactions remain in client components.

## Contributing and support

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidance. For usage questions or reproducible bugs, search or open an issue in [this repository](https://github.com/abdulrdeveloper/abdul-portfolio-tamplate/issues), including your Node.js version, command, expected result, and redacted error output.

Follow the [Code of Conduct](CODE_OF_CONDUCT.md). Report vulnerabilities privately using [SECURITY.md](SECURITY.md).

When publishing your own fork, update the documentation’s repository links and maintainer contacts too.

## License

The template code is available under the [MIT License](LICENSE). You can use, modify, and redistribute it, including commercially, while preserving the required copyright and license notice.

Technology icons retain their existing [Devicon](public/assets/tech/LICENSE.devicon) and [Simple Icons](public/assets/tech/LICENSE.simple-icons) notices.

Replace the example personal content and respect third-party logo and asset rights when creating your own portfolio.
