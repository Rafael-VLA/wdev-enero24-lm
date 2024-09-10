import { createMemoryHistory, createRouter, createWebHashHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import ChatPage from './pages/ChatPage.vue'

const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/chat",
        component: ChatPage
    },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes //router: routes
})