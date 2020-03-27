  <template>
  <v-app id="inspire">
    <Sidebar> </Sidebar>

    <v-container>
      <div id="demoMap" style="height:250px"></div>
    </v-container>
    

    <v-footer app>
      <span>&copy; Particula 2020</span>
    </v-footer>
      <!-- <div id="app">
        <HelloWorld msg="Welcome to Particula"/>
      </div> -->
  </v-app>



</template>

<script>
import Sidebar from '../components/Sidebar'

// import vuetify from '@/plugins/vuetify'


export default {
  name: 'App',
  components: {
    Sidebar
  },
  props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    mounted() {
      // let recaptchaScript = document.createElement('script')
      // recaptchaScript.setAttribute('src', '../components/map/OpenLayers.js')
      // document.head.appendChild(recaptchaScript)

      
    },
    created () {
      this.$vuetify.theme.dark = false;

      // let ckeditor = document.createElement('script');
      // ckeditor.setAttribute('src',"../components/map/OpenLayers.js");
      // document.head.appendChild(ckeditor);

      // var map = new OpenLayers.Map("demoMap");
      // map.addLayer(new OpenLayers.Layer.OSM());
      // map.zoomToMaxExtent();

      
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