import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ProductCardPlugin from './ProductCardPlugin'

const app = createApp(App)

app.use(ProductCardPlugin)

app.mount('#app')
