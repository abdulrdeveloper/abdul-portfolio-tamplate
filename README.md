# Abdul Rahman — Portfolio

A personal portfolio for a self-taught Full Stack Developer and Computer Science student. Includes selected projects, education, a current internship, and links to technical articles.

Built with Next.js, TypeScript, and Tailwind CSS. Pages export as static files; no database, API keys, or application backend is required. The theme toggle and live GitHub activity run in the browser.

## Development

Use Node.js 20.9 or newer and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint
npm run build
```

The production build is exported to `out/`. Deploy that directory to a static host with clean-URL support and `404.html` configured as its not-found page. There is no production server command because this is a static export.

## Updating content

- `constants/site.ts`: name, domain, contact information, navigation, and social links.
- `constants/profile.ts`: skills, education, and the current internship.
- `constants/projects.ts`: project summaries, technologies, features, and demo/source links. Each entry generates a project page.
- `constants/blog.ts`: article titles, short descriptions, publication dates, and original URLs. Titles, dates, and URLs come from the blog’s RSS feed and sitemap. Entries are sorted newest first; the homepage shows three and `/blog` lists all articles.
- `components/core/landing/AboutSection.tsx`: personal introduction.
- `public/avatar.png`: locally stored GitHub profile image.
- `public/assets/tech/`: locally served SVG technology icons from [Devicon](https://github.com/devicons/devicon) and [Simple Icons](https://github.com/simple-icons/simple-icons), with their upstream licenses included. The shared `Badge` component displays them in About and project tech stacks; the icon map is in `constants/tech-icons.ts`.
- `public/assets/projects/`: the four supplied project logos, with outer backgrounds removed using imagegen. The edit prompt preserves each logo’s geometry, colors, and internal badge fill while making only its surrounding canvas transparent.
- `public/og-image.svg` and `public/og-image.png`: sharing artwork source and rendered image.

Full articles remain on [blog.abdulrdeveloper.me](https://blog.abdulrdeveloper.me). The portfolio contains article previews, not duplicate article pages. Add an entry and rebuild to feature a new article.

## Structure

`app/` defines the pages, metadata, sitemap, and robots file. `components/` holds the existing layout and small reusable sections. `constants/` stores editable content, `types/` defines the project and article shapes, and `lib/utils.ts` holds shared class-name and date helpers.

`lib/github.ts` fetches the follower count from GitHub’s public user API and the contribution calendar from [github-contributions-api](https://github.com/grubersjoe/github-contributions-api). The username comes from the GitHub profile URL in `constants/site.ts`. These are the only external runtime data requests; no GitHub token is exposed or required.

GitHub activity loads when the page opens, refreshes every 24 hours while open, and refreshes when an overdue background tab becomes visible. The calendar automatically requests and displays the complete current calendar year. Provider caching can delay updates. Failed requests show an unavailable message instead of invented counts; successful data remains visible if a later refresh fails. The GitHub profile link remains available without JavaScript.

Styling retains the original neutral palette, textured background, and compact cards. The hero reveal respects reduced-motion preferences.

The original owner's projects, experience, article, resume, tracking script, and unused assets have been removed. A resume link can be added once an up-to-date personal CV is available.
