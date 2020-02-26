<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
         <v-list-item link>
          <v-list-item-action>
           <v-icon>mdi-log-in</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title><router-link to="/login">Login</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Particula</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >

          <v-container id="app">
            <HelloWorld msg="Welcome to Particula"/>
          </v-container>
          
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; Particula 2020</span>
    </v-footer>
      <!-- <div id="app">
        <HelloWorld msg="Welcome to Particula"/>
      </div> -->
  </v-app>



</template>

<script>
import HelloWorld from '../components/FrontendHelloWorld'
// import vuetify from '@/plugins/vuetify'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
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