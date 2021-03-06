import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/fonts/font.css';
import '@/assets/tailwind/app.css';

// export const eventBus = new Vue(); // creating an event bus

// globally components
import './icons';

createApp(App).use(router).mount('#app')
