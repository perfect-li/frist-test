// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'
import $ from 'jquery'
import axios from 'axios'
Vue.use(vuex)
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import './assets/css/bootstrap.min.css'  
import './assets/js/bootstrap.min.js'  
Vue.config.productionTip = false

/* eslint-disable no-new */
//VUE 实例
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
