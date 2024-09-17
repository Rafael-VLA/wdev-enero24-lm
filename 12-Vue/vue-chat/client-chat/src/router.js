import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import ChatPage from './pages/ChatPage.vue'

const routes = [
    {
        path: "/",
        name: "home", // Es un identificador único
        component: HomePage
    },
    {
        path: "/chat/:user", // Voy a recibir un user a través de los params
        name: "chat",
        component: ChatPage
    },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes //router: routes
})