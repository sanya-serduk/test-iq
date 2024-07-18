import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import visuallyHidden from "@/directives/visuallyHidden";

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.directive('visually-hidden', visuallyHidden)
app.mount('#app')
