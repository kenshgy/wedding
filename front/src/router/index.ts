import { createRouter, createWebHistory } from 'vue-router'
import InvitatioinView from '@/views/InvitatioinView.vue'
import LetterView from "@/views/LetterView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'letter',
      component: LetterView,
      meta: {title: "Ken&Miki Wedding"}
    },    
    {
      path: '/invitation',
      name: 'invitation',
      component: InvitatioinView,
      meta: {title: "Ken&Miki Wedding"}
    },
  ]
})

export default router
