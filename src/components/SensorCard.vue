<template>
  <v-card
    max-width="400px"
    id="sensorCard"
  >
    <v-img
      src="../img/final_product.png"
    ></v-img>
    <v-card-text>
      <h2>{{ name }}</h2>
      <b><p>{{ description }}</p></b>
      <b>City : </b><p>{{ location.city }}</p>
      <b>Address : </b><p>{{ location.address }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        More Info...
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['guid', 'name','location', 'description']

}
</script>

<style scoped>
#sensorCard{
  text-align: left;
}

</style>