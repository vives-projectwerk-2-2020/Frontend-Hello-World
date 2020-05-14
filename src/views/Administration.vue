<template>
  <v-container>
    <v-content>
      <v-content>
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
            class="pr-5"
          >
            <div id="app">
              <v-card class="elevation-12">
                <v-toolbar
                  color="primary"
                  dark
                  flat
                >
                  <v-toolbar-title>User Login</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-text-field
                    v-model="username"
                    label="Username"
                    name="login"
                    type="text"
                  />
                  <v-text-field
                    id="password"
                    v-model="password"
                    label="Password"
                    name="password"
                    type="password"
                  />
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="primary"
                    @click="login()"
                  >
                    Login
                  </v-btn>
                  <v-btn
                    text
                    x-small
                    absolute
                    right
                    color="deep-blue accent-4"
                  >
                    Forgot Password?
                  </v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="8"
            md="4"
            class="pl-5"
          >
            <v-container id="app">
              <v-card class="elevation-12">
                <v-toolbar
                  color="primary"
                  dark
                  flat
                >
                  <v-toolbar-title>User Registration</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-text-field
                    v-model="username"
                    label="Username"
                    name="login"
                    type="text"
                  />
                  <v-text-field
                    v-model="email"
                    label="Email"
                    name="email"
                    type="text"
                  />
                  <v-text-field
                    id="password"
                    v-model="password"
                    label="Password"
                    name="password"
                    type="password"
                  />
                </v-card-text>
                <p>{{ registrationReturn }}</p>
                <v-card-actions>
                  <v-btn
                    color="primary"
                    @click="register()"
                  >
                    SIGN UP
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-container>
          </v-col>
        </v-row>
      </v-content>
    </v-content>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
    responses: [],
    loginData:[],
    registrationReturn: "",
    username: "",
    email: "",
    password: ""
    }
  },
  methods: {
    register() {
      axios.post(
      "https://develop.particula.devbitapp.be/api/user/register?UserName=" + this.username + "&UserPassword=" + this.password + "&Email=" + this.email)
      .then((response) => {
        this.responses = response.data;
        this.registrationReturn = this.responses;
      });
    },
    login() {
      axios.post(
      "https://develop.particula.devbitapp.be/api/user/login?UserName=" + this.username + "&UserPassword=" + this.password)
      .then((response) => {
        this.loginData = response.data;
        console.log(this.loginData);
      });
    },
  }
}
</script>

<style scoped>
</style>
