<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-container id="app">
          <h1>Sensor Charts</h1>
          <SensorCharts title="Sensor Page" />
        </v-container>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import SensorCharts from '../components/SensorCharts'

export default {
  name: 'App',
  components: {
    SensorCharts
  }
}
</script>
