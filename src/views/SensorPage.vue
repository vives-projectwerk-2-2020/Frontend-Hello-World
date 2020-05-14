<template>
  <div>
    <div>
      <v-btn 
        rounded
        dark 
        class="button" 
        :style="{
          backgroundColor: sensorInfoActive ? 'rgb(0, 68, 208) !important' : 'rgb(0, 68, 208, 0.5)'}"
        @click="toSensorInfo" 
      >
        sensor info
      </v-btn>
      <v-btn 
        rounded 
        dark 
        class="button" 
        :style="{
          backgroundColor: liveValuesActive ? 'rgb(255, 128, 0) !important' : 'rgb(255, 128, 0, 0.5)'}"
        @click="toValues"
      >
        live values
      </v-btn>
    </div>
    <valuesAndCharts v-show="liveValuesActive" />
    <AboutSensor v-show="sensorInfoActive" />
  </div>
</template>

<script>
import valuesAndCharts from "../components/ValuesAndCharts";
import AboutSensor from "../components/AboutSensor";

export default {
  el: "#sensorpage",
  components: {
    valuesAndCharts,
    AboutSensor
  },
  data: () => ({
    sensorInfoActive: true,
    liveValuesActive: false
  }),
  methods: {
    toSensorInfo: function() {
      if (!this.sensorInfoActive) {
        this.liveValuesActive = false;
        this.sensorInfoActive = true;
      }
    },
    toValues: function() {
      if (!this.liveValuesActive) {
        this.liveValuesActive = true;
        this.sensorInfoActive = false;
      }
    }
  }
};
</script>
<style scoped>
.background {
  background-color: rgb(0, 68, 208, 0.1);
  background-color: rgb(255, 128, 0, 0.1);
}

.button {
  margin-top: 70px;
  margin-right: 20px;
  margin-bottom: 30px;
}

.button:hover {
  opacity: 100%;
}
</style>