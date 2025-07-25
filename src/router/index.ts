import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import JoinRedirect from '../views/JoinRedirect.vue'
import OldRaid from '../views/OldRaid.vue'
import RaidSignup from '../views/RaidSignup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/discord', component: JoinRedirect },
    { path: '/amirdrassil', component: OldRaid, props: { name: 'Amirdrassil' } },
    { path: '/nerubar', component: OldRaid, props: { name: "Nerub'ar Palace" } },
    { path: '/undermine', component: OldRaid, props: { name: "Liberation of Undermine"} },
    { path: '/manaforge', component: RaidSignup }
  ]
})

export default router