import { createApp } from 'vue'
import App from './App.vue'
import ScrollParallax from './components/Parallax.vue'

createApp(App).component('scroll-parallax', ScrollParallax).mount('#app')
