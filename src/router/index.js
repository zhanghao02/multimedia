import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Video from '@/pages/Video'
import Music from '@/pages/Music'
import Book from '@/pages/Book'
import Picture from '@/pages/Picture'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/picture',
      name: 'Picture',
      component: Picture
    }
  ]
})
