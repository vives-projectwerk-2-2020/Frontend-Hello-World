<template>
  <v-app id="inspire">
    <Sidebar></Sidebar>
    <v-container>
      <v-content>
        <v-content>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4" class="pr-5">
              <div id="app">
                <v-card class="elevation-12">
                  <v-toolbar color="primary" dark flat>
                    <v-toolbar-title>User Login</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-text-field label="Username" name="login" type="text" />
                    <v-text-field id="password" label="Password" name="password" type="password" />
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary">Login</v-btn>
                    <v-btn text color="deep-blue accent-4">Forgot Password?</v-btn>
                  </v-card-actions>
                </v-card>
              </div>
            </v-col>
            <v-col cols="12" sm="8" md="4" class="pl-5">
              <v-container id="app">
                <v-card class="elevation-12">
                  <v-toolbar color="primary" dark flat>
                    <v-toolbar-title>User Registration</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-text-field label="Username" name="login" type="text" />
                    <v-text-field label="Email" name="email" type="text" />
                    <v-text-field id="password" label="Password" name="password" type="password" />
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary">SIGN UP</v-btn>
                  </v-card-actions>
                </v-card>
              </v-container>
            </v-col>
          </v-row>
        </v-content>
      </v-content>
    </v-container>
    <v-footer app>
      <span>&copy; Particula 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import Sidebar from '../components/Sidebar'
export default {
  props: {
    source: String
  },
  components: {
    Sidebar
  },
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = false;
  }
};
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
