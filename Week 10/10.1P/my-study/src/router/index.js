import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Tasks from '../components/Tasks.vue'
import Units from '../components/Units.vue'

const routes = [
    {
        path:'/',
        name:'Home',
        component: Home
    },
    {
        path:'/Tasks',
        name:'Tasks',
        component: Tasks
    },
    {
        path:'/Units',
        name:'Units',
        component: Units
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
