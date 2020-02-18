<template>
  <div>
      <h1>{{ msg }}</h1>
      <TemperatureChart/>
      <MyChart/>
      <HumidityChart/>

      <v-card height="150">
    <v-footer
      absolute
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Particula | Vives EO-ICT</strong>
      </v-col>
    </v-footer>
  </v-card>
      
  </div>
</template>

<script>
import MyChart from './MyChart'
import TemperatureChart from './TemperatureChart'
import HumidityChart from './HumidityChart'

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