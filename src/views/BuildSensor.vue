<template>
  <v-app id="inspire">
    <v-container style="width: 90%; margin-bottom: 20px; margin-top: 20px;" fluid>
      <v-col>
        <p class="display-3">Build your own sensor</p>
        <p
          class="subtitle-1"
        >Do you want to build your own sensor? Than this is the right place to be!</p>
      </v-col>
      <v-col>
        <p class="display-1">Materials you need</p>
        <p class="subtitle-2" style="max-width: 1080px; margin: auto" :v-text="items.text"></p>
        <p class="subtitle-2"></p>
      </v-col>
      <v-row>
        <v-col v-for="(item, i) in items" :key="i">
          <v-card width="320" class="mx-auto" style="margin-right: 10px">
            <v-list-item>
              <v-list-item-avatar color="green"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline" v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle v-text="item.subTitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-img :src="items.src" height="200"></v-img>
            <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>
            <v-card-actions>
              <v-btn text color="blue" link="item.link" target="_blank">Buy</v-btn>
              <v-spacer></v-spacer>
              <v-btn text tile @click="owned = !owned">
                {{ owned ? 'Bought' : 'Need To Buy' }}
                <v-icon v-show="owned" right color="teal">mdi-check</v-icon>
                <v-icon v-show="!owned" right color="error">mdi-window-close</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    owned: false,
    items: [
      {
        title: "Thermistor",
        subTitle: "10K Precision Epoxy Thermistor",
        src: "../img/10K_PET.jpg",
        text: "These are the materials we used to make our sensor. Feel free to experiment and use your own materials. If you want to build our sensor, you can click the 'BUY' buttons. The icons in the right corner helps you remind wich materials you already have and wich you still need to buy",
        link: "https://www.adafruit.com/product/372",
        icon: "mdi-check",
        iconColor: "teal"
      }
    ]
  })
};
</script>

<style scoped></style>
