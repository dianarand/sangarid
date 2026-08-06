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
    { path: '/midnight', component: OldRaid, props: { name: "Voidspire/Dreamrift/March on Quel'danas" }},
    { path: '/abyss',
      redirect: () => {
        window.location.href = 'https://docs.google.com/spreadsheets/d/1SUJKiuaNKrZk5SSVN5jCgbyRJmPqo9XngzE_BWv9RAY/edit?usp=sharing';
        return '';
      }
    }
  ]
})

export default router