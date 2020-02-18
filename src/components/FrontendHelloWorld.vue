<template>
  <div>
     <v-banner>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus nec sem id malesuada.
    Curabitur lacinia sem et turpis euismod, eget elementum ex pretium.
    <template v-slot:actions>
      <v-btn text color="primary">Dismiss</v-btn>
      <v-btn text color="primary">Retry</v-btn>
    </template>
  </v-banner>
      <h1>{{ msg }}</h1>
      <TemperatureChart/>
      <MyChart/>
      <HumidityChart/>
      
  </div>
</template>

<script>
import MyChart from './MyChart'
import TemperatureChart from './TemperatureChart'
import HumidityChart from './HumidityChart'
import 'vuetify/dist/vuetify.min.css'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    MyChart,
    TemperatureChart,
    HumidityChart
  }
}
</script>