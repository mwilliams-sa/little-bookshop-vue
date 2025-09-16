import { createRouter, createWebHashHistory }
  from "https://unpkg.com/vue-router@4/dist/vue-router.esm-browser.js";

import Home from "./home.js";
import About from "./about.js";
import Contact from "./contact.js";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});
