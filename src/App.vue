<template>
  <div id="app">
    <v-app id="inspire">
      <Sidebar />
      <router-view />
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer"

export default {
  name: 'App',
  components: {
    Sidebar, Footer
  },
  
  data: () => ({
    drawer: null,
  }),

  created () {
    this.$vuetify.theme.dark = false
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
