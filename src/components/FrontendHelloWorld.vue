<template>
  <div>
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