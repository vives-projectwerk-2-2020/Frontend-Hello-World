<template>
  <div>
    <v-btn 
      class="temp"
      @click="showTemperatureChart"
    >
      temperature
    </v-btn>
    <v-btn 
      class="humid" 
      @click="showHumidityChart"
    >
      humidity
    </v-btn>
    <v-btn 
      class="press"
      @click="showPressureChart"
    >
      Pressure
    </v-btn>
    <!--<v-select
      v-model="chosenItem"
      width="100px"
      :items="items"
      :menu-props="{ top: true, offsetY: true }"
    />-->
    <TemperatureChart
      v-show="showTemperature" 
      :v-bind:guid="this.$props.guid"
      :v-bind:period="chosenItem" 
    />
    <HumidityChart
      v-show="showHumidity"
      :v-bind:guid="this.$props.guid"
      :v-bind:period="chosenItem" 
    />
    <PressureChart
      v-show="showPressure"
      :v-bind:guid="this.$props.guid"
      :v-bind:period="chosenItem" 
    />
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
  props: ['guid'],
  data: () => ({
    //chosenItem: '1h',
    //items: ["1h", "24h", "7d", "30d", "1y"],
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