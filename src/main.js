import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockServer' // 加载mockServer
import VueLazyload from 'vue-lazyload'
import loading from './asssets/images/loading.gif'


Vue.use(VueLazyload, {
  loading
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router, // 配置路由器 -->所有组件都多了$router/$route
  store,
})
