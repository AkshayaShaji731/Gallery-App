import { createRouter, createWebHistory } from "vue-router";

import searchInput from '@/components/search.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'search',
            component: searchInput
        }
    ]
})
export default router;