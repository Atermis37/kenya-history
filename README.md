# Kenya, told slowly
Static site, no build step. Open index.html, or run `python -m http.server` in this folder.

kenya-history/
- index.html      structure and chapter text
- css/styles.css  sky transitions, layout, cards
- js/data.js      communities and culture content (edit here)
- js/main.js      sky-per-chapter, parallax, filters, dialog
- assets/         your own images

Add a community: append an object to COMMUNITIES in js/data.js.
Add a chapter: copy an <article class="chapter"> and set data-a, data-b, data-era.
