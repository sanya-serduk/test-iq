import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage
		},
		{
			path: '/result',
			name: 'result',
			component: () => import('../pages/ResultPage.vue')
		},
		{
			path: '/step/:id(\\d+)',
			name: 'step',
			component: () => import('../pages/StepPage.vue')
		},
		{
			path: '/:pathMatch(.*)*',
			redirect: '/'
		}
	]
})

export default router
