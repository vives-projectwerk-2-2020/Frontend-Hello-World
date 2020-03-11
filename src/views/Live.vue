<template>
  <v-app id="inspire">
    <!-- <div>
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
    </div> -->
    <Sidebar>
    </Sidebar>
    

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >

          <v-container>
              <div id="app">
                  {{ info }}
              </div>
           
          </v-container>
          
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; Particula 2020</span>
    </v-footer>
  </v-app>



</template>

<script>
import Sidebar from '../components/Sidebar'
import axios from "axios"
// import vuetify from '@/plugins/vuetify'

export default {
  name: 'App',
  el: '#app',
  components: {
    Sidebar,
  },
  props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      info: null
    }),
    created () {
      this.$vuetify.theme.dark = false
    },
    mounted () {
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.info = response))
    }
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
