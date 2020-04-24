<template>
  <div>
    <Map />
    <v-container
      class="fill-height"
      fluid
    >
    </v-container>
  </div>
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
