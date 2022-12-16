import { createRouter, createWebHistory } from 'vue-router'
import MyProjects from '../views/Projects'
import ProjCats from '../views/Categories'
import ProjSkills from '../views/Skills'
import CustomFields from '../views/CustomFields'
import AppUsers from '../views/Users'
import AppLogin from '../views/Login'

const routes = [
    {
        path: '/',
        name: 'AppProjects',
        component: MyProjects
    },
    {
        path: '/login',
        name: 'AppLogin',
        component: AppLogin
    },
    {
        path: '/categories',
        name: 'ProjCats',
        component: ProjCats
    },
    {
        path: '/skills',
        name: 'Skills',
        component: ProjSkills
    },
    {
        path: '/custom-fields',
        name: 'CustomFields',
        component: CustomFields
    },
    {
        path: '/users',
        name: 'Gebruikers',
        component: AppUsers
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router