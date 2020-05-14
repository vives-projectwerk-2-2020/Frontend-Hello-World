<template>
  <div>
    <TemperatureChart v-show="showTemperature" />
    <HumidityChart v-show="showHumidity" />
    <PressureChart v-show="showPressure" />
    <v-btn @click="showTemperatureChart" class="temp">temperature</v-btn>
    <v-btn @click="showHumidityChart" class="humid">humidity</v-btn>
    <v-btn @click="showPressureChart" class="press">Pressure</v-btn>
  </div>
</template>

<script>
import PressureChart from "./PressureChart";
import TemperatureChart from "./TemperatureChart";
import HumidityChart from "./HumidityChart";
import "vuetify/dist/vuetify.min.css";

export default {
  name: "HelloWorld",
  components: {
    PressureChart,
    TemperatureChart,
    HumidityChart
  },

  data: () => ({
    showTemperature: true,
    showHumidity: false,
    showPressure: false
  }),

  methods: {
    showTemperatureChart: function() {
      if (!this.showTemperature) {
        (this.showTemperature = true),
          (this.showHumidity = false),
          (this.showPressure = false);
      }
    },

    showHumidityChart: function() {
      if (!this.showHumidity) {
        (this.showTemperature = false),
          (this.showHumidity = true),
          (this.showPressure = false);
      }
    },

    showPressureChart: function() {
      if (!this.showPressure) {
        (this.showTemperature = false),
          (this.showHumidity = false),
          (this.showPressure = true);
      }
    }
  }
};
</script>
<style>
.temp {
  color: rgb(139, 0, 0, 0.4);
  margin-right: 20px;
}
.press {
  color: rgb(139, 0, 0, 0.4);
  margin-right: 20px;
}
.humid {
  color: rgb(139, 0, 0, 0.4);
  margin-right: 20px;
}
</style>>