# Kenya, told slowly

A scroll-driven website about Kenya's history, communities and culture. Every factual claim is either tied to a numbered source or visibly marked as unverified.

**Live site:** https://atermis37.github.io/kenya-history/

## What it is

Most history sites hide uncertainty. This one shows it. The site walks through six chapters, from the Koobi Fora fossil record to the 2010 Constitution, followed by twelve community profiles and a culture section. A reference page lists every source, every claim still awaiting verification and every book that has been identified but not yet read.

## Editorial standard

- **Verified claim:** carries a numbered footnote that links to its entry on `sources.html`.
- **Unverified claim:** shows a `SOURCE PENDING` badge (chapters and culture) or a "(source pending)" note (community profiles).
- **Community profiles** are drafts. They have not yet been reviewed by members of each community.
- **A flag is removed only when a source supports the claim**, never because the claim feels right.

## Features

- Chapter-by-chapter timeline with a background that shifts as each chapter enters view
- Era label in the navigation that tracks the section on screen
- Filterable community profiles with a detail dialog, filtered by region
- Culture section driven from data, with verified and pending entries visibly different
- Reference desk page: sources used, research gaps, books to consult
- Responsive layout with a mobile menu, a keyboard-accessible skip link and filters
- Respects `prefers-reduced-motion`
- No framework, no build step, no dependencies beyond Google Fonts

## Project structure

```
kenya-history/
├── index.html        Main page: hero, six chapters, communities, culture
├── sources.html      Reference desk: sources, research gaps, reading list
├── css/styles.css    Dark editorial theme, flag-colour palette, chapter visuals
├── js/data.js        Communities and culture content
├── js/main.js        Era label, scene colours, reveal, filters, dialog, nav
└── assets/og.png     Link-preview image
```

## Run locally

```bash
python -m http.server 8000     # or: py -m http.server 8000 on Windows
```

Then open http://localhost:8000. Opening `index.html` directly also works, but a local server matches how the site behaves when deployed.

## Deploy

The site is deployed with GitHub Pages: Settings → Pages → deploy from the `main` branch, root folder. After deploying, `og:image` in `index.html` must be a full URL for social previews to work.

## Contributing a verified claim

1. Find a source for the claim. Prefer museums, universities, UNESCO, primary documents and peer-reviewed work. Use Wikipedia and blogs only as pointers to better sources.
2. Add a numbered entry to `sources.html`, saying exactly which facts it supports.
3. In `index.html`, remove `class="pending"` from the paragraph and add a footnote link such as `<a class="fn" href="sources.html#s6">[6]</a>`.
4. In `js/data.js`, remove "(source pending)" from community text. For a culture item, set `v: 1, s: <source number>`.
5. Remove the claim from the "Still to verify" list on `sources.html`.

## Known limitations

- Most community profiles and several chapter claims are still marked `SOURCE PENDING`.
- No population figures yet: they must come from the 2019 Census, Volume IV (KNBS).
- The books on the reading list have not been read. Elkins' *Imperial Reckoning* is a restricted lending copy.
- Twelve communities is a starting set, not a ranking or a complete list.
- Chapter illustrations are CSS drawings, not photographs.

## Tech and credits

HTML, CSS and vanilla JavaScript. Fonts: Playfair Display, DM Sans and DM Mono (Google Fonts). Factual content is drawn from the sources listed on the reference desk page.

Built by Atermis37.

## License

Not yet chosen.
