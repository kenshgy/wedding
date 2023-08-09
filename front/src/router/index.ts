import { createRouter, createWebHistory } from 'vue-router'
import InvitatioinView from '@/views/InvitatioinView.vue'
import IndexView from "@/views/indexView.vue"
// import InvitatioinForReceptionView from "@/views/InvitatioinForReceptionView.vue"
import { reception } from '@/components/schedule'
import { scheduleAll } from '@/components/schedule'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
      meta: {title: "Ken&Miki Wedding"}
    },    
    {
      path: '/invitation',
      name: 'invitation',
      props: {schedule: scheduleAll},
      component: InvitatioinView,
      meta: {title: "Ken&Miki Wedding"}
    },
    {
      path: '/invite',
      name: 'invite',
      props: {schedule: reception},
      component: InvitatioinView,
      meta: {title: "Ken&Miki Wedding"}
    },
  ]
})

export default router
