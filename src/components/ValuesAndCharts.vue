<template>
  <div>
    <v-layout wrap> 
      <v-flex
        xs
        v-for="parameter in parameters"
        :key="parameter.title"
      >
        <v-card
          class="cardss"
        >
          <div 
            :class="parameter.title"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title 
                  class="headline mb-1 text"
                >
                  {{ parameter.title }}
                </v-list-item-title>
                <v-list-item-title 
                  class="headline mb-1 text"
                >
                  {{ parameter.value }}
                  {{ parameter.unit }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-card>
      </v-flex>
    </v-layout>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-container 
            id="sensorpage"
          >
            <SensorCharts />
          </v-container>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import axios from "axios";
import SensorCharts from '../components/SensorCharts'

export default {
  name: "SensorPage",
  components: {
    SensorCharts
  },
  data: () => ({
    info: {},
    drawer: false,
    parameters: []
   
  }),
  mounted() {
    this.getAPI();
    this.intervalFetchData();
  },
  methods: {
    getAPI: function() {
      // TODO Use websocket / MQTT instead !!
      axios
        .get(
          "https://develop.particula.devbitapp.be/..."
        )
        .then(response => {
          this.parameters = response.data
        })
    },
    intervalFetchData: function() {
      // TODO Use websocket / MQTT instead !!
      // setInterval(() => {
      //   this.getAPI();
      // }, 2000);
    },
  }
};
</script>

<style>

.cardss{
  width: 300px;
  height: 100px;
  margin: 30px;
  display: inline-block;
}

.temperature{
  background-color: rgb(139,0,0,0.4);
  border-width: 10px;
  border-color: black;
  border-radius: 50px;
  color:  white;
  height: 100px;
}

.temperature:hover{
  background-color: rgb(139,0,0, 0.7);
}

.humidity{
  background-color: rgb(0,68,208,0.4);
  border: 10px;
  border-color: black;
  border-radius: 50px;
  color:  white;
  height: 100px;
}

.humidity:hover{
  background-color: rgb(0,68,208,0.7);
}

.pressure{
  background-color: rgb(0,153,0,0.4);
  border-width: 10px;
  border-color: black;
  border-radius: 50px;
  color:  white;
  height: 100px;
}

.pressure:hover{
  background-color: rgb(0,153,0,0.7);
}

.pm2_5{
  background-color: rgb(76,0,153,0.6);
  border-width: 10px;
  border-color: black;
  border-radius: 50px;
  color:  white;
  height: 100px;
}

.pm10{
  background-color: rgb(204,0,204,0.6);
  border-width: 10px;
  border-color: black;
  border-radius: 50px;
  color:  white;
  height: 100px;
}

.timestamp{
  background-color: rgb(255,128,0,0.6);
  border-width: 400px;
  border-color: black;
  border-radius: 50px;
  color:  white;
  height: 100px;
}

.text{
  color:white;
}

.borders{
   border-width: 50px;
  border-color: black;
}

</style>