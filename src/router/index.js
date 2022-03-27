import { createWebHistory, createRouter } from "vue-router";

import FirstPage from '@/views/FirstPage.vue';
import FileUploader from '@/views/FileUploader';

const routes = [
    {
        path: '/', 
        name: 'Home',
        component: FirstPage,
    },
    {
        path: '/file-uploader', 
        name: 'FileUploader',
        component: FileUploader,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;