// Create app instance
const app = Vue.createApp({
    template:`
    <nav class="mx-md-3 py-3 border-bottom">
        <router-link to="/">Name Test</router-link>
        <span class="px-1 px-md-3">|</span>
        <router-link to="/postManagement" >Post Management</router-link>
        <span class="px-1 px-md-3">|</span>
        <router-link to="/studentMarks">Student Marks</router-link>
    </nav>
    <router-view></router-view>
    `
})

// 1. Define route components.
import nameTest from './component/nameTest.js'
import postManagement from './component/postManagement.js'
import studentMarks from './component/studentMarks.js'

// 2. Define some routes. Each route should map to a component.
const routes = [
    {path: '/', component: nameTest},
    {path: '/postManagement', component: postManagement},
    {path: '/studentMarks', component: studentMarks},
]

// 3. Create the router instance and pass the `routes` option
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

// 4. Mount the root instance.
app.use(router)
app.mount('#app')