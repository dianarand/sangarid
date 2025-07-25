import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import OldRaid from '../views/OldRaid.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/discord', 
      redirect: () => {
        window.location.href = 'https://discord.gg/mqx2VvRpn2';
        return '';
    } },
    { path: '/amirdrassil', component: OldRaid, props: { name: 'Amirdrassil' } },
    { path: '/nerubar', component: OldRaid, props: { name: "Nerub'ar Palace" } },
    { path: '/undermine', component: OldRaid, props: { name: "Liberation of Undermine"} },
    { path: '/manaforge', 
      redirect: () => {
        window.location.href = 'https://docs.google.com/spreadsheets/d/1JgevrjDq_gRFju8Uy1pnF98--josdvIYnUnQekh72qM/edit?usp=sharing';
        return '';
    }
     }
  ]
})

export default router