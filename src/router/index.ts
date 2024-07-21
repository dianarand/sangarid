import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import JoinRedirect from '@/views/JoinRedirect.vue'
import RaidSignup from '../views/RaidSignup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/discord', component: JoinRedirect },
    { path: '/amirdrassil', component: RaidSignup }
  ]
})

export default router
