import Vue from 'vue'
import Router from 'vue-router'
import Login from '../page/login'
import Main from '../page/main'
import Err from '../page/error'
import auth from '../../auth'

//首页面
import Home from '../page/home'

//设备管理
import Hosts from '../page/host/hosts.vue'
import HostScrap from '../page/host/scrap.vue'
import HostGraph from '../page/host/graph.vue'

//故障管理
import Faults from '../page/fault/faults.vue'
import FaultProcess from '../page/fault/process.vue'
import FaultReport from '../page/fault/report.vue'

//报警配置
import AlarmTemplate from '../page/alarm/template.vue'
import AlarmUsers from '../page/alarm/users.vue'
import AlarmHosts from '../page/alarm/hosts.vue'
import AlarmDisable from '../page/alarm/disable.vue'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Main,
    meta: {
      requiresAuth: true
    },
    children: [{
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/hosts',
      name: 'hosts',
      component: Hosts,
    }, {
      path: '/hostScrap',
      name: 'hostScrap',
      component: HostScrap
    }, {
      path: '/hostGraph',
      name: 'hostGraph',
      component: HostGraph
    }, {
      path: '/faultReport',
      name: 'faultReport',
      component: FaultReport,
    }, {
      path: '/faultProcess',
      name: 'faultProcess',
      component: FaultProcess
    }, {
      path: '/faults',
      name: 'faults',
      component: Faults
    }, {
      path: '/alarmTemplate',
      name: 'alarmTemplate',
      component: AlarmTemplate,
    }, {
      path: '/alarmUsers',
      name: 'alarmUsers',
      component: AlarmUsers
    }, {
      path: '/alarmHosts',
      name: 'alarmHosts',
      component: AlarmHosts
    }, {
      path: '/alarmDisable',
      name: 'alarmDisable',
      component: AlarmDisable
    }]
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/error',
    name: 'error',
    component: Err
  }]
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
    next({
      path: '/error',
      query: {
        redirect: to.fullPath
      }
    })
  }
})

export default router
