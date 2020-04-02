<template>
  <v-app id="inspire">
    <h1>This is a testpage of Matthias</h1>
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
