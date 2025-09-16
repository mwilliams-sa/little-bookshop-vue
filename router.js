import { createRouter, createWebHashHistory }
  from "https://unpkg.com/vue-router@4/dist/vue-router.esm-browser.js";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

export default createRouter({ history: createWebHashHistory(), routes });
