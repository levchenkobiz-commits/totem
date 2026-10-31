# HookahPlace Totem

Published frontend build. Site: https://levchenkobiz-commits.github.io/totem/

The repository contains the published frontend, not the original bundler project.
`index.html` loads the application bundle and `assets/refinements.css` for the satin controls and responsive menu labels. Menu grouping and the two book links live in `assets/menu-sections.js`; the original item names, notes and prices remain in the application bundle. The first book opens hookahs and non-alcoholic drinks, the second opens alcohol, and food stays in its own section. Non-alcoholic beer belongs to the first menu.

Publish by pushing the checked commit to `main` (GitHub Pages, repository root). Check desktop/mobile menu switching, both reservation modes and the route/taxi buttons after publishing. Booking submissions and phone/taxi links contact external services: browser smoke checks must not actually submit or call them.
