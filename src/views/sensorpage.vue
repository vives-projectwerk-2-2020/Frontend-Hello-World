
<template>
  <div class="stats">
    <h1 class="subheading grey--text">stats</h1>
    <v-container class="my-5">
  <v-content>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="parameter in stats" v-bind:key= "parameter.title">
          <v-card flat class="text-xs-center ma-40">
            <v-responsive class="pt-4">
              icon comes here
            </v-responsive>
            <v-card-text>
                <div class="subheading"> {{ parameter.title }} </div>
                <div class="subheading"> {{ parameter.value }} </div>
            </v-card-text>
            </v-card>
        </v-flex> 
      </v-layout>
    </v-container>
    </v-content>
    </v-container>
  </div>
  </template>



<script>
import axios from "axios";
export default {
    methods: {
    getAPI: function() {
      axios
        .get("https://virtserver.swaggerhub.com/sillevl/Particula/0.1/measurements/3fa85f64-5717-4562-b3fc-2c963f66afa6?period=24h&properties=pm10")
        .then(response => (this.info = response));
    },
    intervalFetchData: function() {
      setInterval(() => {
        this.getAPI();
      }, 2000);
    }
  },
    data(){
        return {
            stats: [
                {
                type: "warning",
                icon: "ti-shine",
                title: 'Temperature',
                value: 'info.data[0].pm10',
                },
                {
                // type: "success",
                // icon: "ti-paint-bucket",
                title: 'humidity',
                value: '60%',
                },
                {
                // type: "danger",
                // icon: "ti-vector",
                title: 'pressure',
                value: '1 at',
                },
                {
                // type: "info",
                // icon: "ti-line-dotted",
                title: 'PM 2.5',
                value: '10 ppm',
                },
                {
                // type: "info",
                // icon: "ti-more",
                title: 'PM 10',
                value: '100ppm',
                }
            ], 
        }
    }
}
</script>