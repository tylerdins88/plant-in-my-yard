import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomePage.vue')
        },
        {
            path: '/Explanation',
            name: 'Explanation',
            component: () => import('../views/AppExplanation.vue')
        },
        {
            path: '/search',
            name: 'Search',
            component: () => import('../views/HardinessZone.vue')
        },
        {
            path: '/plants',
            name: 'Plants',
            component: () => import('../views/MyPlants.vue')
        },
    ]
})

export default router