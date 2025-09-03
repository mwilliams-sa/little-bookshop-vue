// router.js
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

const { createRouter, createWebHashHistory } = VueRouter;

// You can switch to createWebHistory() if you host on a server
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/',        name: 'home',    component: Home },
    { path: '/about',   name: 'about',   component: About },
    { path: '/contact', name: 'contact', component: Contact },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});
