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
| Name, domain, email, navigation, and social links | [`constants/site.ts`](constants/site.ts) |
| Skills, experience, and education | [`constants/profile.ts`](constants/profile.ts) |
| Projects, technologies, features, and demo/source links | [`constants/projects.ts`](constants/projects.ts) |
| Blog previews and external article links | [`constants/blog.ts`](constants/blog.ts) |
| Hero introduction | [`HeroSection.tsx`](components/core/landing/HeroSection.tsx) |
| Personal story | [`AboutSection.tsx`](components/core/landing/AboutSection.tsx) |
| Contact introduction | [`ContactSection.tsx`](components/core/landing/ContactSection.tsx) |
| Profile photo | `public/avatar.png` |
| Favicon | `public/favicon.png` |
| CV | `public/Abdul_Rahman_CV.pdf` |
| Project and organization logos | `public/assets/` |
| Social sharing artwork | `public/og-image.svg` and `public/og-image.png` |

### Personalization checklist

- Replace the example identity, biography, contact links, and CV.
- Add only your own projects, skills, education, and experience.
- Remove unused sections from [`app/page.tsx`](app/page.tsx).
- Set your deployed domain in `constants/site.ts`.
- Update your GitHub profile URL to load your activity.
- Replace the avatar, favicon, logos, and sharing artwork.
- Review names and descriptions in page metadata and structured data.
- Search the source for `Abdul Rahman`, `abdulrdeveloper`, and `Spurvance` to catch remaining example content.

Some personal details are written directly in components, metadata, and [`components/seo/JsonLd.tsx`](components/seo/JsonLd.tsx), so updating the constants alone does not replace every reference.

Editing the sharing SVG does not automatically regenerate its PNG.

### Projects

Edit `constants/projects.ts` to add or remove projects. Each project entry generates a detail page at `/projects/[slug]`.

Update its description, technologies, features, logo, demo URL, and source URL. Rebuild after changing project entries.

### Blog previews

Edit `constants/blog.ts` with your article titles, descriptions, publication dates, and URLs.

Entries are sorted newest first. The homepage shows the latest three, while `/blog` lists all previews. Full articles open on your external blog.

Article previews are maintained manually; publishing an article elsewhere does not automatically update the portfolio.

### CV

Replace `public/Abdul_Rahman_CV.pdf` with your own document. If you rename it, update the CV link in `constants/site.ts`.

## GitHub integration

The template fetches public follower data from GitHub and contribution data from a separate contribution-calendar provider.

The username is derived from your GitHub URL in `constants/site.ts`. No token is required.

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
- [`components/seo/JsonLd.tsx`](components/seo/JsonLd.tsx) for structured data.
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
app/             Pages, styles, metadata, sitemap, and robots
components/      Portfolio sections, layout, and reusable UI
constants/       Site settings and editable content
lib/             GitHub requests and shared utilities
public/          Images, icons, logos, and CV
types/           Shared TypeScript types
```

## Contributing and support

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidance and [SUPPORT.md](SUPPORT.md) for troubleshooting.

Follow the [Code of Conduct](CODE_OF_CONDUCT.md). Report vulnerabilities privately using [SECURITY.md](SECURITY.md).

When publishing your own fork, update the documentation’s repository links and maintainer contacts too.

## License

The template code is available under the [MIT License](LICENSE). You can use, modify, and redistribute it, including commercially, while preserving the required copyright and license notice.

Technology icons retain their existing [Devicon](public/assets/tech/LICENSE.devicon) and [Simple Icons](public/assets/tech/LICENSE.simple-icons) notices.

Replace the example personal content and respect third-party logo and asset rights when creating your own portfolio.
