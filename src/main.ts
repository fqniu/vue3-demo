import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 让vue 2.x项目使用vue3.x的语法
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
