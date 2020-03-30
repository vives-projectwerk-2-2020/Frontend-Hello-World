<template>
  <div>
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

                <p> PM10: {{ info.pm10 }} </p>
                <p> PM2.5: {{ info.pm2_5 }} </p>
                <p> Temperature: {{ info.temperature }} </p>
                <p> Pressure: {{ info.pressure }} </p>
                <p> Humidity: {{ info.humidity }} </p>
                <p> Time: {{ info.timestamp }} </p>
              </v-card>
            </div>
          </v-container>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>

import axios from "axios";
// import vuetify from '@/plugins/vuetify'

export default {
  name: "Live",
  data: () => ({
    info: {}
  }),
  mounted() {
    this.getAPI();
    this.intervalFetchData();
  },
  methods: {
    getAPI: function() {
      // TODO Use websocket / MQTT instead !!
      axios
        .get(
          "https://virtserver.swaggerhub.com/sillevl/Particula/0.1/measurements/3fa85f64-5717-4562-b3fc-2c963f66afa6?period=24h&properties=pm10",
          { headers: { 'Access-Control-Allow-Origin': '*',} } )
        .then(response => this.info = response.data[0] )
    },
    intervalFetchData: function() {
      // TODO Use websocket / MQTT instead !!
      // setInterval(() => {
      //   this.getAPI();
      // }, 2000);
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
