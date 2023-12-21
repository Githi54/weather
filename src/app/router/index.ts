import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@components/pages/HomePage.vue'
import SelectedPage from '@components/pages/SelectedPage.vue'

export const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/selected', component: SelectedPage, name: 'Selected' },
]

export const router = createRouter({
  history: createWebHistory('/weather'),
  routes,
})
