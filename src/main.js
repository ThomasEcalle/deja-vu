import { createApp, reactive } from 'vue'
import App from './App.vue' 
import './index.css'
import { createStore } from 'vuex'
import store from './store'
import './more.css'

const app = createApp(App);

app.use(store);
app.mount('#app');
