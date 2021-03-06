// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './vuex/store'

try {
  window.$ = window.jQuery = require('jquery')

  require('bootstrap-sass')
  require('bootstrap-datepicker')
} catch (e) {}

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
