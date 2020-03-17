<template>
  <div>
    
    <h1>{{ msg }}</h1>
    <!--<TemperatureChart />
    <HumidityChart />-->
    <MyChart />
    
   
  </div>
</template>

<script>
import MyChart from "./MyChart";
//import TemperatureChart from "./TemperatureChart";
//import HumidityChart from "./HumidityChart";
import "vuetify/dist/vuetify.min.css";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    MyChart/*,
    TemperatureChart,
    HumidityChart*/
  }
};
</script>