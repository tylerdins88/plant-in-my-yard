import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/Explanation',
            name: 'Explanation',
            component: () => import('../views/AppExplanation.vue')
        },
        {
            path: '/search',
            name: 'Search',
            component: () => import('../views/SearchBox.vue')
        },
    ]
})

export default router