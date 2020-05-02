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
        <p
          class="subtitle-2"
          style="max-width: 1080px; margin: auto"
        >These are the materials we used to make our sensor. Feel free to experiment and use your own materials. If you want to build our sensor, you can click the 'BUY' buttons. The icons in the right corner helps you remind wich materials you already have and wich you still need to buy.</p>
      </v-col>

      <v-row>
        <v-col v-for="(item, i) in items" :key="i">
          <v-card width="310" class="mx-auto" style="margin-right: 10px">
            <v-list-item>
              <v-list-item-avatar :color="item.avatarColor">
                <v-icon color="white" v-text="item.avatarIcon"></v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline" v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle v-text="item.subTitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-img :src="item.img" height="220"></v-img>
            <v-card-text v-text="item.text"></v-card-text>
            <v-card-actions>
              <v-btn text color="blue" :href="item.link" target="_blank">Buy</v-btn>
              <v-spacer></v-spacer>
              <v-btn text tile @click="owned = !owned">
                {{ owned ? 'Bought' : 'Need To Buy' }}
                <v-icon v-show="owned" right color="teal">mdi-check</v-icon>
                <v-icon v-show="!owned" right color="error">mdi-window-close</v-icon>
                <!--Problem - All chards are changing together-->
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
        avatarColor: "teal",
        avatarIcon: "mdi-electron-framework",
        title: "Thermistor",
        subTitle: "10K Precision Epoxy Thermistor",
        img: "https://cdn-shop.adafruit.com/970x728/372-00.jpg",
        text: "This epoxy-coated precision 1% 10K thermistor is an inexpensive way to measure temperature in weather or liquids.",
        link: "https://www.adafruit.com/product/372"
      },
      {
        title: "MAGGIE",
        subTitle: "De Block",
        img:
          "https://images.tijd.be/view?iid=dc:72375975&context=ONLINE&ratio=16/9&width=640&u=1490349745000",
        text: "This is Maggie de Block",
        link: "https://www.youtube.com/watch?v=9fUpgn_STdc"
      },
      {
        title: "MAGGIE",
        subTitle: "De Block",
        img:
          "https://images.tijd.be/view?iid=dc:72375975&context=ONLINE&ratio=16/9&width=640&u=1490349745000",
        text: "This is Maggie de Block",
        link: "https://www.youtube.com/watch?v=9fUpgn_STdc"
      },
      {
        title: "MAGGIE",
        subTitle: "De Block",
        img:
          "https://images.tijd.be/view?iid=dc:72375975&context=ONLINE&ratio=16/9&width=640&u=1490349745000",
        text: "This is Maggie de Block",
        link: "https://www.youtube.com/watch?v=9fUpgn_STdc"
      },
      {
        title: "MAGGIE",
        subTitle: "De Block",
        img:
          "https://images.tijd.be/view?iid=dc:72375975&context=ONLINE&ratio=16/9&width=640&u=1490349745000",
        text: "This is Maggie de Block",
        link: "https://www.youtube.com/watch?v=9fUpgn_STdc"
      },
      {
        title: "MAGGIE",
        subTitle: "De Block",
        img:
          "https://images.tijd.be/view?iid=dc:72375975&context=ONLINE&ratio=16/9&width=640&u=1490349745000",
        text: "This is Maggie de Block",
        link: "https://www.youtube.com/watch?v=9fUpgn_STdc"
      },
      {
        title: "MAGGIE",
        subTitle: "De Block",
        img:
          "https://images.tijd.be/view?iid=dc:72375975&context=ONLINE&ratio=16/9&width=640&u=1490349745000",
        text: "This is Maggie de Block",
        link: "https://www.youtube.com/watch?v=9fUpgn_STdc"
      }
    ]
  })
};
</script>

<style scoped></style>
