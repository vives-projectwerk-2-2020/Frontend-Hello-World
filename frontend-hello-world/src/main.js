import Vue from 'vue'
import App from './App.vue'
import TempChart from './TempChart.vue'
import HumidityChart from './HumidityChart.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(TempChart),
}).$mount('#TempChart')

new Vue({
  render: h => h(HumidityChart),
}).$mount('#HumidityChart')