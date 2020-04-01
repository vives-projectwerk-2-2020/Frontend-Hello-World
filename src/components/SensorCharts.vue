<template>
  <div>
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
    components: {
        PressureChart,
        TemperatureChart,
        HumidityChart
    },
    
    data: () => ({
    }),

};
</script>