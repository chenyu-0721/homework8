import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'
const app = createApp(App)

app.use(router)
app.mount('#app')
