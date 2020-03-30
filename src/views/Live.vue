<template>
  <v-app id="inspire">
    <Sidebar />

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-container>
            <div id="app">
              <v-card
                max-width="500"
                max-height="500"
                class="mx-auto"
              >
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="headline">
                      Live Sensor
                    </v-list-item-title>
                    <v-list-item-subtitle>These are the values of sensor with id:</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <p> PM10: {{ info.data[0].pm10 }} </p>
                <p> PM2.5: {{ info.data[0].pm2_5 }} </p>
                <p> Temperature: {{ info.data[0].temperature }} </p>
                <p> Pressure: {{ info.data[0].pressure }} </p>
                <p> Humidity: {{ info.data[0].humidity }} </p>
                <p> Time: {{ info.data[0].timestamp }} </p>
              </v-card>
            </div>
          </v-container>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; Particula 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import Sidebar from "../components/Sidebar";
import axios from "axios";
// import vuetify from '@/plugins/vuetify'

export default {
  el: "#live",
  name: "Live",
  components: {
    Sidebar
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    info: null
  }),
  created() {
    this.$vuetify.theme.dark = false;
  },
  mounted() {
    this.getAPI();
    this.intervalFetchData();
  },
  methods: {
    getAPI: function() {
      axios
        .get("https://virtserver.swaggerhub.com/sillevl/Particula/0.1/measurements/3fa85f64-5717-4562-b3fc-2c963f66afa6?period=24h&properties=pm10")
        .then(response => (this.info = response));
    },
    intervalFetchData: function() {
      setInterval(() => {
        this.getAPI();
      }, 2000);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
