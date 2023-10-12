import { createWebHistory, createRouter } from 'vue-router'
import NavView from '../components/NavView'
import HomeView from '../components/HomeView'
import AddContent from '../components/AddContent'
import ProfileView from '../components/ProfileView'
import SocialView from '../components/SocialView'

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
    },
    {
        name: 'ProfileView',
        path: '/home/profile',
        component: ProfileView
    },
    {   name: 'SocialView',
        path: '/home/social',
        component: SocialView
    }      
]
const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router