import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/note',
    name: 'Note',
    // route level code-splitting
    // this generates a separate chunk (note.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "note" */ '../views/note/index.vue'),
  },
  {
    path: '/note/vue',
    name: 'NoteVue',
    component: () => import('@/views/note/vue-note.vue'),
  },
  {
    path: '/note/ts',
    name: 'NoteTs',
    component: () => import('@/views/note/ts-note.vue'),
  },
  {
    path: '/note/js',
    name: 'NoteJs',
    component: () => import('@/views/note/js-note.vue'),
  },
  {
    path: '/note/tool',
    name: 'NoteTool',
    component: () => import('@/views/note/tool-note.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
