<template>
  <v-container
    class="grey lighten-5 mb-6"
    justify-center
  >
    <v-row>
      <v-col
        cols="12"
      >
        <v-row
          class="grey lighten-5"
          height="auto"
        >
          <Sensors 
            id="sensorCard"
            v-for="sensor in sensors"
            v-bind:key="sensor.guid"
            v-bind:guid="sensor.guid"
            v-bind:name="sensor.name"
            v-bind:description="sensor.description"
            v-bind:location="sensor.location"
          />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import Sensors from "../components/SensorCard"

export default {
  name: "SensorPage",
  components: {
    Sensors
  },
  data: function() {
    return {
      info: {},
      drawer: false,
      sensors: []
    }
  },
  mounted() {
    this.getAPI();
    this.intervalFetchData();
  },
  methods: {
    getAPI: function() {
      // TODO Use websocket / MQTT instead !!
      axios
        .get(
          "https://develop.particula.devbitapp.be/sensors"
        )
        .then(response => {
           this.sensors = response.data
           console.log(this.sensors)

        })
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

<style scoped>
  sensorCard {
    margin: 20px
  }
</style>