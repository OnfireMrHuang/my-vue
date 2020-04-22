import Vue from 'vue'
import App from './App.vue'
import antd from "ant-design-vue"
import router from './router';

Vue.use(antd)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
