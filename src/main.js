import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import VueSocialSharing from 'vue-social-sharing'

createApp(App)
.use(VueSocialSharing)
.mount('#app')
