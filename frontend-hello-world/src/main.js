import Vue from 'vue'
import App from './App.vue'
import TempGraph from './TempGraph.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(TempGraph),
}).$mount('#TempGraph')