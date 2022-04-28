import { createApp } from 'vue'
import App from './App.vue'
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue'

createApp(App).component('scroll-parallax', ScrollParallax).mount('#app')
