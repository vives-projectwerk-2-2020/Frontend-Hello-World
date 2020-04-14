<script>
import Vue from "vue";
import VueLayers from "vuelayers";
import "vuelayers/lib/style.css"; // needs css-loader

Vue.use(VueLayers);
Vue.use(VueLayers, {
  dataProjection: "EPSG:4326"
});
export default {};
</script>
