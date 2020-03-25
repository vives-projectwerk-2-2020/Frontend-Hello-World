<template>
  <v-app id="inspire">
    <Sidebar></Sidebar>

    <v-card width="450" class="ma-auto" dark>
      <v-header>Themes</v-header>

      <v-divider></v-divider>

      <v-list light >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Light</v-list-item-title>
            <v-list-item-subtitle>I need a little light to guide the way!</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list dark>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Dark</v-list-item-title>
            <v-list-item-subtitle>I like the dark side! It has cookies!</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-card>
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
    settings: []
  })
};
</script>

<style scoped>
</style>