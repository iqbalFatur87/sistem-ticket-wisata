import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import { Chart } from 'chart.js';
import store from './store';

const app = createApp(App)

axios.defaults.withCredentials = true;

axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]')

app.use(router).use(store)

app.mount('#app')

// Make Chart globally available
window.Chart = Chart;