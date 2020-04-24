<template>
  <v-app id="inspire">
    <h1>TestPage</h1>
    <AboutSensor />
    <h1>TestPage</h1>
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
