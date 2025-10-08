import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // ✅ tambahkan ini

const app = createApp(App)

app.use(router) // ✅ aktifkan router di Vue instance
app.mount('#app')
