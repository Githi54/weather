import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@components/pages/HomePage.vue'

export const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/selected', component: HomePage, name: 'Selected' },
]

export const router = createRouter({
  history: createWebHistory('/weather'),
  routes,
})
