<template>
  <v-card class="mx-auto" width="1400px">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1250.1837652387912!2d3.2183284!3d51.1938791!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcded5a4988f83cd5!2sKU%20Leuven%20Campus%20Brugge!5e0!3m2!1sen!2sbe!4v1585853731962!5m2!1sen!2sbe"
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </v-col>
        <v-col cols="12" sm="6">

        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false
  })
};
</script>

<style>
:v-card {
  width: 1400px;
  height: 900px;
}
</style>