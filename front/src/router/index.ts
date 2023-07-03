import { createRouter, createWebHistory } from 'vue-router'
import InvitatioinView from '@/views/InvitatioinView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'invitation',
      component: InvitatioinView,
      meta: {title: "Ken&Miki Wedding"}
    },
  ]
})

export default router
