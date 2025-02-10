import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';

createApp(App).use(router).mount('#app');

// console.log('MODE :' + import.meta.env.MODE);
// console.log('BASE URL :' + import.meta.env.BASE_URL);
// console.log('PROD :' + import.meta.env.PROD);
// console.log('DEV :' + import.meta.env.DEV);
// console.log('VITE_APP_API_URL :' + import.meta.env.VITE_APP_API_URL);
