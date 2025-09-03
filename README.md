# little-bookshop-vue

 ** What routing setup you implemented**
    Vue Router navigation with three routes:
    Home
    About
    Contact

Router configuration with hash-based URLs.
Reusable components for each page, stored in components/.
Active link highlighting for the current page.
Simple styles (styles.css) to match the Little Bookshop theme.

**Project structure** 

little-bookshop-vue-router/
├── index.html          # App entry point
├── app.js              # Mounts Vue and applies router
├── router.js           # Vue Router configuration
├── styles.css          # Shared styling
└── components/
    ├── Home.js         # Home page component
    ├── About.js        # About page component
    └── Contact.js      # Contact page component

**Testing** 
Verified in Chrome, Firefox, and Edge.
Navigation updates the view instantly without reload.
Browser back/forward buttons work correctly.
Active link styling matches the selected route.

**Challenges or customisations** 
Routing mode: Initially tried createWebHistory(), but it didn’t work on GitHub Pages (404 on reload). Solved by switching to createWebHashHistory().
File imports: Learned to organize Vue components as ES modules and import them cleanly.
Code quality: Added a fallback redirect (/:pathMatch(.*)* → /) to avoid empty views when navigating to unknown URLs.
