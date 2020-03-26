  <template>
  <v-app id="inspire">
    <Sidebar></Sidebar>

    <v-container>
      <div id="demoMap" style="height:800px">
        
      </div>
      <div id="content"><a href="#" v-bind:placeholder="load_home()" required>HOME</a></div>
    </v-container>

    <v-footer app>
      <span>&copy; Particula 2020</span>
    </v-footer>
    <!-- <div id="app">
        <HelloWorld msg="Welcome to Particula"/>
    </div>-->
  </v-app>
</template>


<script>
import Sidebar from "../components/Sidebar";

// import vuetify from '@/plugins/vuetify'

export default {
  name: "App",
  components: {
    Sidebar
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  mounted() {},
  created() {},
  methods: {
    load_home() {
      console.log("Load_Home");
      document.getElementById("demoMap").innerHTML =
        '<object type="type/html" data="../components/map/index.html" ></object>';
    }
  }
};
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