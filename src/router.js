import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/pages/home/Home.vue'
import About from './components/pages/About.vue'
import Article from "@/components/pages/article/Article.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/article/:id',
        name: 'Article',
        component: Article,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    // autres routes
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('./components/pages/NotFound.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router