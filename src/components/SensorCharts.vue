<template>
  <div>
    <div class="center">
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
      <v-btn 
        class="Pm2_5" 
        @click="showPm2_5Chart"
      >
        Pm 2.5
      </v-btn>
      <v-btn 
        class="Pm10" 
        @click="showPm10Chart"
      >
        Pm 10
      </v-btn>
    </div>
    <!--<v-select
      v-model="chosenItem"
      width="100px"
      :items="items"
      :menu-props="{ top: true, offsetY: true }"
    />-->
    <div class="charts">
      <TemperatureChart
        v-show="showTemperature" 
        :v-bind:guid="this.$props.guid"
        :v-bind:period="chosenItem" 
        :width="auto"
        :height="300"
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
      <Pm2_5Chart
        v-show="showPm2_5"
        :v-bind:guid="this.$props.guid"
        :v-bind:period="chosenItem" 
      />
      <Pm10Chart
        v-show="showPm10"
        :v-bind:guid="this.$props.guid"
        :v-bind:period="chosenItem" 
      />
    </div>
  </div>
</template>

<script>
import PressureChart from "./PressureChart";
import TemperatureChart from "./TemperatureChart";
import HumidityChart from "./HumidityChart";
import Pm2_5Chart from "./Pm2_5Chart";
import Pm10Chart from "./Pm10Chart";
import "vuetify/dist/vuetify.min.css";

export default {
  name: "HelloWorld",
  components: {
    PressureChart,
    TemperatureChart,
    HumidityChart,
    Pm2_5Chart,
    Pm10Chart
  },
  props: ['guid'],
  data: () => ({
    //chosenItem: '1h',
    //items: ["1h", "24h", "7d", "30d", "1y"],
    showTemperature: true,
    showHumidity: false,
    showPressure: false,
    showPm2_5: false,
    showPm10: false
  }),

  methods: {
    showTemperatureChart: function() {
      if (!this.showTemperature) {
        (this.showTemperature = true),
          (this.showHumidity = false),
          (this.showPressure = false),
          (this.showPm2_5 = false),
          (this.showPm10 = false);
      }
    },

    showHumidityChart: function() {
      if (!this.showHumidity) {
        (this.showTemperature = false),
          (this.showHumidity = true),
          (this.showPressure = false),
          (this.showPm2_5 = false),
          (this.showPm10 = false);
      }
    },

    showPressureChart: function() {
      if (!this.showPressure) {
        (this.showTemperature = false),
          (this.showHumidity = false),
          (this.showPressure = true),
          (this.showPm2_5 = false),
          (this.showPm10 = false);
      }
    },
    showPm2_5Chart: function() {
      if (!this.showPm2_5) {
        (this.showTemperature = false),
          (this.showHumidity = false),
          (this.showPressure = false),
          (this.showPm2_5 = true),
          (this.showPm10 = false);
      }
    },
    showPm10Chart: function() {
      if (!this.showPm10) {
        (this.showTemperature = false),
          (this.showHumidity = false),
          (this.showPressure = false),
          (this.showPm2_5 = false),
          (this.showPm10 = true);
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

.Pm2_5 {
  color: rgb(139, 0, 0, 0.4);
  margin-right: 20px;
}

.Pm10 {
  color: rgb(139, 0, 0, 0.4);
  margin-right: 20px;
}
.center{
  display: table;
  margin: 0 auto;
}

.charts{
  position: relative;
  width: 100%;
  height: 100%;
}
</style>>