import { createRouter, createWebHistory } from "vue-router";

import serachInput from '@/components/search.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_UR),
    routes: [
        {
            path: '/',
            path: '/',
            name: 'search',
            component: serachInput
        }
    ]
})

export default router