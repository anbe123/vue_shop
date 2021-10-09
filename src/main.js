import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 完整引入
// 引入ElementUI的全部样式
import 'element-ui/lib/theme-chalk/index.css'
// 引入ElementUI 组件库
import ElementUI from 'element-ui'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
