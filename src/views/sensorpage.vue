<template>
    <v-app id= "inspire">

    <Sidebar></Sidebar>

    <div>
    <v-btn rounded color="primary" dark class="button">sensor info</v-btn>
    <v-btn rounded color="warning" dark class="button">live values</v-btn>
    <v-btn rounded color="success" dark class="button">sensor info</v-btn>
    </div>

     
    <v-card
    class="cards"
    max-width="344"
    outlined>
      <div class="temperature">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1 text">Temperature</v-list-item-title>
            <v-list-item-title class="headline mb-1 text">{{ info.data[0].temperature }}°C</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-card>

    <v-card
    class="cards"
    max-width="344"
    outlined>
      <div class="humidity">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1 text">Humidity</v-list-item-title>
            <v-list-item-title class="headline mb-1 text">{{ info.data[0].humidity }}%</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-card>
    
     

    </v-app>
</template>

<script>
import Sidebar from "../components/Sidebar";
import axios from "axios";

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
  },
  mounted() {
    this.getAPI();
    this.intervalFetchData();
  },
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

.cards{
  margin: 30px;
}

.temperature{
  background-color: rgb(139,0,0,0.6);
  border-width: 10px;
  border-color: black;
  border-radius: 50px;
  color:  white;
}

.humidity{
  background-color: rgb(0,68,208,0.6);
  border-width: 10px;
  border-color: black;
  border-radius: 50px;
  color:  white;
}

.text{
  color:white;
}

</style>