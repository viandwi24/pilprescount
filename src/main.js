// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
 

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(VueAxios, axios)
Vue.use(VueChartkick, {adapter: Chart})
Vue.config.productionTip = false

window.$ = window.jQuery = require('jquery')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
