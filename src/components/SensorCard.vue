<template>
  <v-card
    max-width="400px"
  >
    <v-img
      src="../img/final_product.png"
      align-end
    />
    <v-card-text>
      <h2>{{ name }}</h2>
      <b> {{ description }}</b>
      <b> Address : </b> <p>{{ location.address }}</p>
      <b> City : </b> <p>{{ location.city }}</p>
    </v-card-text>
    <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
          :to="{ path: `/sensorPage/${guid}` }"
        >
            More Info...
        </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
props: ['guid','name','location','description'],
data: function() {
  return {

  }
}
}
</script>

<style>

</style>