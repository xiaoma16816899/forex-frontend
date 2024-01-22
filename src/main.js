import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import "./assets/app.css"
import router from './router'
import 'primevue/resources/themes/lara-light-green/theme.css';
import 'primeicons/primeicons.css'


const app = createApp(App)
app.use(router)
app.use(PrimeVue)
app.mount("#app")