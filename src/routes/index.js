import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue'
import MovieDetail from '../pages/MovieDetail.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/:id',
      name: 'MovieDetail',
      component: MovieDetail,
    }
  ]
})
