import { createRouter, createWebHistory } from "vue-router";

import searchInput from '@/components/search.vue'
import homepage from '@/pages/HomePage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: homepage
        }
    ]
})
export default router;