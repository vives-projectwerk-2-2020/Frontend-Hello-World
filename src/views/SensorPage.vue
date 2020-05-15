<template>
  <div>
    <div class="text-center">
      <v-btn
        rounded
        color="primary"
        dark
        class="buttonSens"
        @click="toSensorInfo"
      >
        sensor info
      </v-btn>
      <v-btn
        rounded
        color="warning"
        dark
        class="buttonSens"
        @click="toValues"
      >
        live values
      </v-btn>
    </div>
    <valuesAndCharts 
      v-show="liveValuesActive" 
      v-bind:guid="guid"
    />
    <AboutSensor 
      v-show="sensorInfoActive"
      v-bind:guid="guid"
    />
  </div>
</template>

<script>
import valuesAndCharts from "../components/ValuesAndCharts";
import AboutSensor from "../components/AboutSensor";

export default {
  components: {
    valuesAndCharts,
    AboutSensor
  },
  data() {
    return {
      API_url: 'https://develop.particula.devbitapp.be/',
      sensorInfoActive: true,
      liveValuesActive: false,
      guid: this.$route.params.guid
    }
  },
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

.buttonSens {
  margin-top: 70px;
  margin-right: 20px;
  margin-bottom: 30px;
  opacity: 50%;
}

.buttonSens:hover {
  opacity: 100%;
}
</style>
