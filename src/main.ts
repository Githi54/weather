import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import './style.css'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(VueQueryPlugin)
app.mount('#app')
