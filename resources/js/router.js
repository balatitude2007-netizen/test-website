import { createRouter, createWebHistory } from 'vue-router';
import Home from './Pages/Home.vue';
import About from './Pages/About.vue';
import Services from './Pages/Services.vue';
import HireUs from './Pages/HireUs.vue';
import Blogs from './Pages/Blogs.vue';
import Career from './Pages/Career.vue';
import Contact from './Pages/Contact.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/services', component: Services },
    { path: '/hire-us', component: HireUs },
    { path: '/blogs', component: Blogs },
    { path: '/career', component: Career },
    { path: '/contact', component: Contact },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router;
