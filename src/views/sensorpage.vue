<template>
    <v-app id= "inspire">

    <Sidebar></Sidebar>

    <div>
    <v-btn rounded color="primary" dark class="button">sensor info</v-btn>
    <v-btn rounded color="warning" dark class="button">live values</v-btn>
    <v-btn rounded color="success" dark class="button">sensor info</v-btn>
    </div>

    <v-card>
    </v-card>

    </v-app>
</template>

<script>
import Sidebar from "../components/Sidebar";
export default {
    name: "sensorpage",
    el: "#sensorpage",
     props: {
    source: String
  },
  components: {
    Sidebar
  },
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = false;
  }
};

</script>

<style>

.button{
    margin: 20px ;
    opacity: 50%;
}

.button:hover{
    opacity: 100%;
}

</style>