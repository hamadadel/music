import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from '@/plugins/validation'

import '@/assets/css/base.css'
import '@/assets/css/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VeeValidatePlugin)

app.mount('#app')
