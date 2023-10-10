import { createWebHistory, createRouter } from 'vue-router'
import NavView from '../components/NavView'
import HomeView from '../components/HomeView'
import AddContent from '../components/AddContent'

const routes = [
    {
        name: 'NavView',
        path: '/',
        component: NavView
    },
    {
        name: 'HomeView',
        path: '/home',
        component: HomeView
    },
    {
        name: 'AddContent',
        path: '/home/add-content',
        component: AddContent
    }
]
const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router