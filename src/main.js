// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import './sass/common.scss'

import Vue from 'vue'
import EU from 'element-ui'

import App from './App'
import router from './core/router'

Vue.use(EU)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
