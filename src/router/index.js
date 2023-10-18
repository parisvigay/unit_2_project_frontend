import { createWebHistory, createRouter } from 'vue-router'
import NavView from '../components/NavView'
import HomeView from '../components/HomeView'
import AddContent from '../components/AddContent'
import ProfileView from '../components/ProfileView'
import SocialPage from '../components/SocialPage'
import RecommendationsView from '../components/RecommendationsView'
import UpdateFavourite from '../components/UpdateFavourite'
import UserProfiles from '../components/UserProfiles'

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
    {
        name: 'SocialPage',
        path: '/home/social',
        component: SocialPage
    },
    {   name: 'RecommendationsView',
        path: '/home/social/recommendations',
        component: RecommendationsView
    },
    {
        name: 'UpdateFavourite',
        path: '/home/update-favourite',
        component: UpdateFavourite
    },
    {
        name: 'UserProfiles',
        path: '/home/social/user-profiles',
        component: UserProfiles
    }
]
const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router