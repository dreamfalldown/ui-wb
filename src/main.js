import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-theme-dark';
import './index.scss'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
