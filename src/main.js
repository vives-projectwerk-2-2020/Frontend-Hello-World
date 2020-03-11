import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import Live from './views/Live.vue'
=======
import Home from './views/Home.vue'
import Admin from './views/Administration.vue'
import About from './views/About.vue'
>>>>>>> 88020459332e42aa17d6c73bc3daa653a8eddd01
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

new Vue({
  router,
  vuetify,
<<<<<<< HEAD
  render: h => h(Live)
}).$mount('#live')
=======
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
>>>>>>> 88020459332e42aa17d6c73bc3daa653a8eddd01
