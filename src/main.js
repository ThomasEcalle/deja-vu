import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import i18n from "./i18n";
import YouTube from 'vue3-youtube'


import './assets/index.css'
import './assets/fonts.css'
import './assets/more.css'

const app = createApp(App);

app.use(YouTube);
app.use(store);
app.use(i18n);
app.mount('#app');
