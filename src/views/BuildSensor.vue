<template>
  <v-app id="inspire">
    <v-container
      style="width: 90%; margin-bottom: 20px; margin-top: 20px;"
      fluid
    >
      <v-col>
        <p class="display-3">Build your own sensor</p>
        <p class="subtitle-1">
          Do you want to build your own sensor? Than this is the right place to
          be!
        </p>
      </v-col>
      <v-col>
        <p class="display-1">Components you need</p>
        <p class="subtitle-2" style="max-width: 1080px; margin: auto">
          These are the components we used to make our sensor. Feel free to
          experiment and use your own components. If you want to build our
          sensor, you can click the 'BUY' buttons. The icons in the right corner
          helps you remind wich components you already have and wich you still
          need to buy.
        </p>
      </v-col>
      <v-col>
        <v-row>
          <v-col>
            <v-avatar color="teal">
              <v-icon color="white">mdi-electron-framework</v-icon>
            </v-avatar>
            <p class="subtitle-1">Components</p>
          </v-col>
          <v-col>
            <v-avatar color="purple">
              <v-icon color="white">mdi-developer-board</v-icon>
            </v-avatar>
            <p class="subtitle-1">Boards</p>
          </v-col>
          <v-col>
            <v-avatar color="red">
              <v-icon color="white">mdi-flask-empty-outline</v-icon>
            </v-avatar>
            <p class="subtitle-1">Extra icon</p>
          </v-col>
        </v-row>
      </v-col>

      <v-row>
        <v-col v-for="(item, i) in items" :key="i">
          <v-card width="310" class="mx-auto" style="margin-right: 10px">
            <v-list-item>
              <v-list-item-avatar :color="item.avatarColor">
                <v-icon color="white" v-text="item.avatarIcon"></v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title
                  class="headline"
                  v-text="item.title"
                ></v-list-item-title>
                <v-list-item-subtitle
                  v-text="item.subTitle"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-img :src="item.img" height="220"></v-img>
            <v-card-text v-text="item.text"></v-card-text>
            <v-card-actions>
              <v-btn text color="blue" :href="item.link" target="_blank"
                >Buy
              </v-btn>
              <v-btn text color="black" :href="item.gitLink" target="_blank">
                <v-icon>mdi-github</v-icon>git
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn text tile @click="owned = !owned">
                {{ owned ? "Bought" : "Need To Buy" }}
                <v-icon v-show="owned" right color="teal">mdi-check</v-icon>
                <v-icon v-show="!owned" right color="error"
                  >mdi-window-close</v-icon
                >
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
        text:
          "This epoxy-coated precision 1% 10K thermistor is an inexpensive way to measure temperature in weather or liquids.",
        link: "https://www.adafruit.com/product/372",
        gitLink: "",
      },
      {
        avatarColor: "purple",
        avatarIcon: "mdi-developer-board",
        title: "NUCLEO L432KC",
        subTitle: "Developper board",
        img:
          "https://os.mbed.com/media/cache/platforms/Nucleo32_ULP_cbKR6Cl.jpg.250x250_q85.jpg",
        text:
          "The STM32 Nucleo board provides an affordable and flexible way for users to try out new ideas and build prototypes with any STM32 microcontroller line, choosing from the various combinations of performance, power consumption and features.",
        link: "https://os.mbed.com/platforms/ST-Nucleo-L432KC/",
        gitLink: "",
      },
      {
        avatarColor: "red",
        avatarIcon: "mdi-flask-empty-outline",
        title: "TEST",
        subTitle: "this is a test",
        img:
          "https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
        text:
          "Hello, I'm testing here some cards. I hope it works well. I should see it in a moment I guess.",
        link: "https://www.youtube.com/watch?v=9fUpgn_STdc",
      },
      {
        avatarColor: "red",
        avatarIcon: "mdi-flask-empty-outline",
        title: "TEST",
        subTitle: "this is a test",
        img:
          "https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
        text:
          "Hello, I'm testing here some cards. I hope it works well. I should see it in a moment I guess.",
        link: "https://www.youtube.com/watch?v=9fUpgn_STdc",
      },
      {
        avatarColor: "red",
        avatarIcon: "mdi-flask-empty-outline",
        title: "TEST",
        subTitle: "this is a test",
        img:
          "https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
        text:
          "Hello, I'm testing here some cards. I hope it works well. I should see it in a moment I guess.",
        link: "https://www.youtube.com/watch?v=9fUpgn_STdc",
      },
      {
        avatarColor: "red",
        avatarIcon: "mdi-flask-empty-outline",
        title: "TEST",
        subTitle: "this is a test",
        img:
          "https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
        text:
          "Hello, I'm testing here some cards. I hope it works well. I should see it in a moment I guess.",
        link: "https://www.youtube.com/watch?v=9fUpgn_STdc",
      },
      {
        avatarColor: "red",
        avatarIcon: "mdi-flask-empty-outline",
        title: "TEST",
        subTitle: "this is a test",
        img:
          "https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
        text:
          "Hello, I'm testing here some cards. I hope it works well. I should see it in a moment I guess.",
        link: "https://www.youtube.com/watch?v=9fUpgn_STdc",
      },
    ],
  }),
};
</script>

<style scoped></style>
