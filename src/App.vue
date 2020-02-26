<template>
  <v-app id="inspire">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  props: {
      source: String,
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