<template>
  <v-app id="inspire">
    <h1>TestPage</h1>
    <AboutSensor />
  </v-app>
</template>

<script>
import AboutSensor from "../components/AboutSensor";
export default {
  name: "TestPage",
  components: {
    AboutSensor
  }
};
</script>

<style scoped>
</style>
