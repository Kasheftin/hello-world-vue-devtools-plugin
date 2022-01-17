import Vue from 'vue'
import App from './App.vue'
import DevtoolsPlugin from './DevtoolsPlugin'

Vue.config.productionTip = false
Vue.use(DevtoolsPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
