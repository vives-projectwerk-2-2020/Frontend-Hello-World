<template>
  <v-app id="inspire">
    <Sidebar></Sidebar>
    <v-content>
      <v-container class="fill-height" fluid>
        <p class="display-2">Settings</p>

      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import Sidebar from "../components/Sidebar";
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

<style scoped>
</style>