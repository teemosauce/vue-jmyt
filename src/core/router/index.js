import Vue from 'vue'
import Router from 'vue-router'
import Login from '../partials/login'
import Main from '../partials/main'
import Err from '../partials/error'
import auth from '../../auth'

//main children component.
import Home from '../partials/home'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        }
      ]
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/error',
      name: 'error',
      component: Err
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched instanceof Array && to.matched.length > 0) {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in if not, redirect to login page.
      if (!auth.getSessionId()) {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        })
      } else {
        next()
      }
    } else {
      next() // 确保一定要调用 next()
    }
  } else {
    next({path: '/error'})
  }
})

export default router
