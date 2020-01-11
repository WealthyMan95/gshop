/**
 * 入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* ↓不添加这一行就会报错Do not use 'new' for side effects，这句注释可以绕过规则检测 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用上 vue-router
  store // 使用上VueX
})
