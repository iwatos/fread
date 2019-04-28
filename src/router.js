import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Store from '@/store'


Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        isPublic: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: function () {
        return import('./views/About.vue')
      },
      meta: {
        isPublic: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: function () {
        return import('./views/Login.vue')
      },
      meta: {
        isPublic: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: function () {
        return import('./views/Signup.vue')
      },
      meta: {
        isPublic: true
      }
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: function () {
        return import('./views/MyPage.vue')
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(page => page.meta.isPublic) || Store.state.auth.token) {
    next()
  } else {
    next('/login')
  }
})

export default router