<template>
  <v-content
    justify-center
  >
    <h1>Sensors</h1>
    <v-row
      class="mb-6"
    >
      <v-col>
        <SensorCard 
          v-for="sensor in sensors"
          id="sensorCard"
          :key="sensor.guid"
          :guid="sensor.guid"
          :name="sensor.name"
          :description="sensor.description"
          :location="sensor.location"

          tile
          outlined
        />
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import axios from "axios";
import SensorCard from "../components/SensorCard"

export default {
  name: "SensorPage",
  components: {
      SensorCard
  },
  data: () => ({
    info: {},
    drawer: false,
    sensors: []
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
#sensorCard {
  margin: 20px
}
</style>