<template>
  <div>
    <h1>{{ title }}</h1>
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          sm="5"
        >
          <p>Chart</p>
          <v-select
            v-model="dropdown_current_values"
            :items="dropdown_charts"
            chips
            label="all"
            multiple
            solo
            @change="changePage"
          />
        </v-col>
        <!--
        <v-col cols="12" sm="5">
            <p>Amount of Values</p>
            
        </v-col>
        <v-col cols="12" sm="2">
            <p> </p>
            <v-btn class="ma-2" tile outlined color="success">
                <v-icon left>mdi-pencil</v-icon> Edit
            </v-btn>
        </v-col> -->
      </v-row>
    </v-container>
    <TemperatureChart v-if="seeTemperature" />
    <HumidityChart v-if="seeHumidity" />
    <PressureChart v-if="seePressure" />
  </div>
</template>

<script>
import PressureChart from "./PressureChart";
import TemperatureChart from "./TemperatureChart";
import HumidityChart from "./HumidityChart";
import "vuetify/dist/vuetify.min.css";

export default {
    name: "HelloWorld",
    components: {
        PressureChart,
        TemperatureChart,
        HumidityChart
    },
    props: {
        title:{
            type: String,
            default: "Chart"
        }
    },
    data: () => ({
        dropdown_charts: ['Temperature', 'Humidity', 'Pressure', 'All'],
        dropdown_current_values: [],
        dropdown_last_values: [],
        beforeAll: [
            false,
            false,
            false
        ],
        seeTemperature: false,
        seeHumidity: false,
        seePressure: false,
        seeAll: false
    }),
    methods: {
        changePage() {
            console.log(this.dropdown_values)
            let difference = this.arrayDifference(this.dropdown_current_values, this.dropdown_last_values)

            if(this.seeAll == false) {
                if(difference === 'All') {
                    this.beforeAll[0] = this.seeTemperature
                    this.beforeAll[1] = this.seeHumidity
                    this.beforeAll[2] = this.seePressure

                    this.seePressure = true
                    this.seeTemperature = true
                    this.seeHumidity = true
                    this.seeAll = true
                }

                if (difference === 'Temperature') {
                    if(this.seeTemperature == false) {
                        this.seeTemperature = true
                    } else {
                        this.seeTemperature = false
                    }
                }
                
                if(difference === 'Humidity') {
                    if(this.seeHumidity == false) {
                        this.seeHumidity = true
                    } else {
                        this.seeHumidity = false
                    }
                }
                
                if (difference === 'Pressure') {
                    if(this.seePressure == false) {
                        this.seePressure = true
                    } else {
                        this.seePressure = false
                    }
                }
            } else {
                if(difference === 'All') {
                    this.seeAll = false
                    this.seeTemperature = this.beforeAll[0]
                    this.seeHumidity = this.beforeAll[1]
                    this.seePressure = this.beforeAll[2]
                }

                if (difference === 'Temperature') {
                    if(this.seeTemperature == false) {
                        this.beforeAll[0] = true
                    } else {
                        this.beforeAll[0] = false
                    }
                }
                
                if(difference === 'Humidity') {
                    if(this.seeHumidity == false) {
                        this.beforeAll[1] = true
                    } else {
                        this.beforeAll[1] = false
                    }
                }
                
                if (difference === 'Pressure') {
                    if(this.seePressure == false) {
                        this.beforeAll[2]
                    } else {
                        this.beforeAll[2]
                    }
                }
            }
            this.dropdown_last_values = this.dropdown_current_values;

        },
        arrayDifference (firstArray, secondArray) {

            let tempArray = [], diff = [];

            for (let i = 0; i < firstArray.length; i++) {
                tempArray[firstArray[i]] = true;
            }

            for (var i = 0; i < secondArray.length; i++) {
                if (tempArray[secondArray[i]]) {
                    delete tempArray[secondArray[i]];
                } else {
                    tempArray[secondArray[i]] = true;
                }
            }

            for (let k in tempArray) {
                diff.push(k);
            }

            return diff[0];
        }
    }

};
</script>