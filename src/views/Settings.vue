<template>
  <v-row>
    <v-card
      width="450"
      class="ma-auto"
      dark
    >
      <v-header>Themes</v-header>

      <v-divider />

      <v-list light>
        <v-list-item>
          <v-list-item-content>
            <v-btn @click="lightTheme">
              Light
            </v-btn>
            <v-list-item-subtitle>I need a little light to guide the way!</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list dark>
        <v-list-item>
          <v-list-item-content>
            <v-btn @click="darkTheme">
              Dark
            </v-btn>
            <v-list-item-subtitle>I like the dark side! It has cookies!</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>

    <v-card
      width="450"
      class="ma-auto"
    >
      <v-header>Fonts</v-header>

      <v-divider />

      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-btn @click="bigFont">
              big
            </v-btn>
            <v-btn @click="biggerFont">
              little bigger
            </v-btn>
            <v-btn @click="normalFont">
              normal
            </v-btn>
            <v-btn @click="smallerFont">
              little smaller
            </v-btn>
            <v-btn @click="smallFont">
              small
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-row>
</template>

<script>
import Sidebar from "../components/Sidebar";
export default {
  data: () => ({
    settings: []
  }),
  methods: {
    darkTheme() {
      alert("Dark"); // Remove this line
      // Fill here in how to change the theme to dark
    },
    lightTheme() {
      alert("Light"); // Remove this line
      // Fill here in how to change the theme to light
    },
    bigFont() {
      alert("BIG"); // Remove this line
      // Fill here in how to change the font to big
    },
    biggerFont() {
      alert("BIGGER"); // Remove this line
      // Fill here in how to change the font to bigger
    },
    normalFont() {
      alert("NORMAL"); // Remove this line
      // Fill here in how to change the font to normal
    },
    smallerFont() {
      alert("SMALLER"); // Remove this line
      // Fill here in how to change the font to smaller
    },
    smallFont() {
      alert("SMALL"); // Remove this line
      // Fill here in how to change the font to small
    }
  }
};
</script>

<style scoped>
</style>
