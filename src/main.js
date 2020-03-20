import Vue from 'vue'
import App from './App.vue'
import Home from './views/Home.vue'
import Admin from './views/Administration.vue'
import Map from './components/Map.vue'
import About from './views/About.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import LoadScript from 'vue-plugin-load-script';
 
Vue.use(LoadScript)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

new Vue({
  router,
  vuetify,
  render: h => h(Home)
}).$mount('#home')

new Vue({
  router,
  vuetify,
  render: h => h(Admin)
}).$mount('#admin')

new Vue({
  router,
  vuetify,
  render: h => h(About)
}).$mount('#about')

new Vue({
  router,
  vuetify,
  render: h => h(Map)
}).$mount('#map')