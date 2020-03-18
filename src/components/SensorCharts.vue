<template>
  <div>
    
    <h1>{{ title }}</h1>
    <TemperatureChart />
    <HumidityChart />
    <PressureChart />
    
   
  </div>
</template>

<script>
import PressureChart from "./PressureChart";
import TemperatureChart from "./TemperatureChart";
import HumidityChart from "./HumidityChart";
import "vuetify/dist/vuetify.min.css";

export default {
  name: "HelloWorld",
  props: {
    title: String
  },
  components: {
    PressureChart,
    TemperatureChart,
    HumidityChart
  }
};
</script>