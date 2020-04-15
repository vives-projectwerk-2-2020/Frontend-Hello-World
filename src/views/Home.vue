<template>
  <v-content>
    <Map />
    <v-container
      class="fill-height"
      fluid
    >
    </v-container>
  </v-content>
</template>

<script>
import Map from '../components/Map'
// import vuetify from '@/plugins/vuetify'
export default {
  name: 'Home',
  components: {
     Map
  }
}
</script>

<style scoped>
</style>
