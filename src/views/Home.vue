<template>
  <v-content>
    <Map />
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-container id="app">
          <SensorCharts title="Sensor Page" />
        </v-container>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import SensorCharts from '../components/SensorCharts'
import Map from '../components/Map'
// import vuetify from '@/plugins/vuetify'
export default {
  name: 'Home',
  components: {
    SensorCharts, Map
  }
}
</script>

<style scoped>
</style>
