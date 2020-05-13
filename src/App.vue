<template>
  <v-app>
    <Sidebar />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Sidebar,
    Footer
  },

  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = false;

    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.showUpgradeUI = true;
      });
    }
  },

  methods: {
    async accept() {
      this.showUpgradeUI = false;
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    }
  }
};
</script>

<style>

</style>
