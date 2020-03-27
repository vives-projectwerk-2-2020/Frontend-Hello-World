  <template>
  <v-app id="inspire">
    <Sidebar> </Sidebar>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >

          <v-container id="app">
            <h1>Sensor Charts</h1>
            <SensorCharts title="Sensor Page"/>
          </v-container>
          
        </v-row>
      </v-container>
    </v-content>
    
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


    <v-footer app>
      <span>&copy; Particula 2020</span>
    </v-footer>
      <!-- <div id="app">
        <HelloWorld msg="Welcome to Particula"/>
      </div> -->
  </v-app>
</template>

<script>
import SensorCharts from '../components/SensorCharts'
import Sidebar from '../components/Sidebar'
// import vuetify from '@/plugins/vuetify'
export default {
  name: 'App',
  components: {
    SensorCharts,
    Sidebar
  },
  props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = false
    },
    dataForCards() {
    return {
      stats: [
        {
         // type: "warning",
          // icon: "ti-shine",
          title: "Temperature",
          value: "info.data[0].pm10",
        },
        {
          // type: "success",
          // icon: "ti-paint-bucket",
          title: "humidity",
          value: "60%",
        },
        {
          // type: "danger",
          // icon: "ti-vector",
          title: "pressure",
          value: "1 at",
        },
        {
          // type: "info",
          // icon: "ti-line-dotted",
          title: "PM 2.5",
          value: "10 ppm",
        },
        {
          // type: "info",
          // icon: "ti-more",
          title: "PM 10",
          value: "100ppm",
        }
      ],
    }
  }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>