import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Calendar from "primevue/calendar";
import 'primevue/resources/themes/lara-dark-indigo/theme.css';
import App from './App.vue';


const app = createApp(App);
app.use(PrimeVue);
app.mount('#app');
