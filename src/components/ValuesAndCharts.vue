<template>
  <div>
    <div class="top">
      <h1>Live Values</h1>
      <div class="topLeft">
        <div class="leftMeter">
          <VueSvgGauge
            class="meter"
            :value="parameters[3].value"
            :separator-step="10"
            :min="0"
            :max="100"
            :gauge-color="[{ offset: 0, color: '#69e05c'},{ offset: 50, color: '#ef5201'}, { offset: 100, color: '#d93a35'}]"
            :scale-interval="0.1"
          >
            <div class="inner-text">
              <span>airquality</span>
            </div>
          </VueSvgGauge>
        </div>
        <div class="rightMeter">
          <VueSvgGauge
            class="meter"
            :value="parameters[0].value"
            :separator-step="5"
            :min="0"
            :max="50"
            :gauge-color="[{ offset: 0, color: '#4fc3f7'},{ offset: 50, color: '#FFFF00'}, { offset: 100, color: '#FFA500'}]"
            :scale-interval="0.1"
          >
            <div class="inner-text">
              <span>temperature</span>
            </div>
          </VueSvgGauge>
        </div>
      </div>
      <div class="topRight">
        <v-layout wrap>
          <v-flex
            v-for="parameter in parameters"
            :key="parameter.title" 
            xs
            class="col-md-6"
          >
            <v-card class="cardss">
              <div :class="parameter.title">
                <div class="cardLeft">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-list-item-title class="bigtext">
                        {{ parameter.title }}
                      </v-list-item-title>
                      <v-list-item-title class="smalltext">
                        {{ parameter.value }}
                        {{ parameter.unit }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </div>
                <div class="cardRight">
                  <v-icon 
                    size="300%" 
                    class="icons"
                    :color="parameter.color"
                  > 
                    {{ parameter.icon }}
                  </v-icon>
                </div>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </div>
    <div class="bottom">
      <h1>Charts</h1>
      <v-content>
        <v-container
          class="fill-height" 
          fluid
        >
          <v-row 
            align="center" 
            justify="center"
          >
            <v-container id="sensorpage">
              <SensorCharts v-bind="this.$props['guid']"/>
            </v-container>
          </v-row>
        </v-container>
      </v-content>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SensorCharts from "../components/SensorCharts";
import { VueSvgGauge } from "vue-svg-gauge";
import { mdiThermometer } from '@mdi/js';

export default {
  props: ['guid'],
  name: "SensorPage",
  components: {
    SensorCharts,
    VueSvgGauge,
  },
  data: function() {
    return {
      API_url: "https://develop.particula.devbitapp.be/",
      sensor: {},
      drawer: false,
      parameters: [
        { title: "temperature", value: undefined , unit: "°C", icon:"mdi-thermometer", color: "rgb(139, 0, 0, 0.4)" },
        { title: "humidity", value: undefined, unit: "%", icon:"mdi-water-percent", color: "rgb(0, 68, 208, 0.4)"  },
        { title: "pressure", value: undefined, unit: "hPa", icon:"mdi-arrow-collapse-down", color: "rgb(0, 153, 0, 0.4)" },
        { title: "pm10", value: undefined, unit: "µm/m^3", icon:"mdi-google-circles-extended", color: "rgb(76, 0, 153, 0.4)"  },
        { title: "pm2_5", value: undefined, unit: "µm/m^3", icon:"mdi-google-circles-extended", color: "rgb(204, 0, 204, 0.4)"   },
        { title: "timestamp", value: undefined, unit: "", icon:"mdi-clock-outline", color: "rgb(255, 128, 0, 0.4)"}
      ]
    }
  },
  mounted() {
    this.intervalFetchData()
    this.getAPI()
  },
  methods: {
    getAPI: function() {
      let sensor_url = 'https://develop.particula.devbitapp.be/sensors/' + this.$props['guid'] 
      console.log(sensor_url)

      // TODO Use websocket / MQTT instead !!
      axios
        .get(
          sensor_url
        )
        .then(response => {
          this.parameters[0].value = response.data.measurements[0].temperature
          this.parameters[1].value = response.data.measurements[0].humidity
          this.parameters[2].value = response.data.measurements[0].pressure
          this.parameters[3].value = response.data.measurements[0].pm10
          this.parameters[4].value = response.data.measurements[0].pm25
          this.parameters[5].value = response.data.measurements[0].time
        });
    },
    intervalFetchData: function() {
      // TODO Use websocket / MQTT instead !!
      // setInterval(() => {
      //   this.getAPI();
      // }, 2000);
    }
  }
};
</script> 

<style>
* {
  box-sizing: border-box;
}

@font-face {
  font-family: follana;
  src: url(fonts/SIMPLIFICATypeface.ttf);
}

.bigtext {
  font-family: follana;
  font-size: 150%;
  font-weight:300px;
}
.smalltext{
  font-size:110%
}

h1 {
  font-family: follana;
  font-weight: 40px;
  font-size: 300%;
  margin-top: 2.5%;
}

.top {
  display: table;
  content: "";
  clear: both;
  border: 2px solid rgb(40, 40, 40, 0.4);
  background-color: rgb(255, 254, 253);
  width: 95%;
  height: auto;
  margin-left: 2.5%;
  border-radius: 30px;
  font-family: follana;
  font-weight: 40px;
}
.topLeft {
  display: table;
  content: "";
  clear: both;
  float: left;
  width: 50%;
  height: auto;
  border: 2px solid rgb(40, 40, 40, 0.4);
  border-radius: 30px;
  margin-left: 2.5%;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
}
.bottom {
  border: 2px solid rgb(40, 40, 40, 0.4);
  background-color: rgb(255, 254, 253);
  width: 95%;
  height: auto;
  margin-top: 2.5%;
  margin-left: 2.5%;
  margin-bottom: 5%;
  border-radius: 30px;
}

.meter {
  height: auto;
  margin-top: 100px;
}

.leftMeter {
  margin: 5% 30%;
  margin-top: 0%;
}
.rightMeter {
  margin: 5% 30%;
}

.cardss {
  width: 75%;
  height: 100px;
  margin: 50px;
  display: inline-block;
  text-align: left;
}

.temperature {
  background-color: white;
  border: 2px solid rgb(139, 0, 0, 0.4);
  color: rgb(139, 0, 0, 0.4);
  height: 100px;
}

.humidity {
  background-color: white;
  border: 2px solid rgb(0, 68, 208, 0.4);
  color: rgb(0, 68, 208, 0.4);
  height: 100px;
}

.pressure {
  background-color: white;
  border: 2px solid rgb(0, 153, 0, 0.4);
  color: rgb(0, 153, 0, 0.4);
  height: 100px;
}

.pm2_5 {
  background-color: white;
  border: 2px solid rgb(76, 0, 153, 0.4);
  color: rgb(76, 0, 153, 0.6);
  height: 100px;
}

.pm10 {
  background-color: white;
  border: 2px solid rgb(204, 0, 204, 0.4);
  color: rgb(204, 0, 204, 0.6);
  height: 100px;
}

.timestamp {
  height: 100px;
  background-color: white;
  border: 2px solid rgb(255, 128, 0, 0.4);
  color: rgb(255, 128, 0, 0.6);
  height: 100px;
}
.borders {
  border-width: 50px;
  border-color: black;
}
.inner-text {
  height: 100%;
  width: auto;
  margin-top: 70px;
}

.cardLeft{
  float:left;
}

.icons{
  float: right;
}

span {
  max-width: 100px;
}
</style>