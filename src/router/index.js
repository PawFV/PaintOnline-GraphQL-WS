import Vue from 'vue'
import VueRouter from 'vue-router'
import ChatRooms from '../views/ChatRooms.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ChatRooms
  },
  {
    path: '/chat-room/:id',
    name: 'ChatRoom',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ChatRoom.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
