// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/index'
import { AjaxPlugin } from 'vux'
import "../css/reset.css"
Vue.use(AjaxPlugin)
Vue.use(VueRouter)
Vue.prototype.HOST = '/api'
const routes = [
{
  path: '/',
  component: Home
}
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
