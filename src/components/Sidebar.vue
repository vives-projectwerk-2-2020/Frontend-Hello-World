<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list dense>
        <v-list-item
          v-for="item in navigation"
          :key="item.title"
          :to="item.route"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Particula</v-toolbar-title>
      <v-spacer />
      <router-link
        to="/profile"
        tag="button"
      >
        <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data: () => ({
    drawer: false,
    navigation: [
      { title: "Home", route: "/", icon: "mdi-home" },
      { title: "Login/SignUp", route: "/login", icon: "mdi-login" },
      // {
      //   title: "Sensor Charts",
      //   route: "/charts",
      //   icon: "mdi-chart-areaspline"
      // },
      // { title: "Live", route: "/live", icon: "mdi-clock-check-outline" },
      // { title: 'Settings', route: '/settings', icon: 'mdi-wrench'},
      {
        title: "sensorpage",
        route: "/sensorpage",
        icon: "mdi-chart-areaspline"
      },
      { title: "About", route: "/about", icon: "mdi-information-outline" },
      {
        title: "Build The Sensor Yourself",
        route: "/buildSensor",
        icon: "mdi-hammer-screwdriver"
      }
    ]
  })
};
</script>