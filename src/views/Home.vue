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
            <SensorCharts title="Sensor Page"/>
          </v-container>
          
        </v-row>
      </v-container>
    </v-content>

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