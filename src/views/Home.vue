<template>
  <div id="mapDiv">
    <vl-map
      ref="map"
      data-projection="EPSG:4326"
    >
      <vl-view
        v-model:zoom="zoom"
        v-model:center="center"
      />
      <vl-layer-tile>
        <vl-source-osm />
      </vl-layer-tile>

      <vl-interaction-select v-model:features="selected">
        <vl-style-box>
          <vl-style-icon
            src="https://img.icons8.com/ultraviolet/50/000000/place-marker.png"
            :anchor="[0.5, 1]"
          />
        </vl-style-box>
      </vl-interaction-select>

      <vl-layer-vector>
        <vl-source-vector>
          <vl-feature
            v-for="(feature,idx) in features"
            :id="feature.id"
            :key="idx"
          >
            <vl-geom-point v-model:coordinates="feature.geometry.coordinates" />
          </vl-feature>

          <vl-style-box>
            <vl-style-icon
              src="https://img.icons8.com/office/50/000000/place-marker.png"
              :anchor="[0.5, 1]"
            />
          </vl-style-box>
        </vl-source-vector>
      </vl-layer-vector>
    </vl-map>
  </div>
</template>

<script>
//import Vue from '../components/VueLayers.vue'
import Vue from "vue";
import VueLayers from "vuelayers";
import $ from "jquery";
import "vuelayers/lib/style.css"; // needs css-loader
var featurelist = [];

Vue.use(VueLayers);
Vue.use(VueLayers, {
  dataProjection: "EPSG:4326"
});
export default {
  data() {
    return {
      zoom: 10,
      minZoom: 4,
      maxZoom: 15,
      center: [3.21767,51.1942],
      selected: [],
      mapCursor: "default",
      features: featurelist //[
      // {
      //
      //]
    };
  },
  mounted() {
    $.getJSON("https://develop.particula.devbitapp.be:80/sensors", function(
      data
    ) {
      //console.log(data)
      //data is the JSON string
      for (var i = 0; i < data.length; i++) {
        let feature = {
          type: "Feature",
          id: data[i].id,
          geometry: {
            type: "Point",
            coordinates: [parseFloat(data[i].location.longitude), parseFloat(data[i].location.latitude)]
          }
        };
        featurelist.push(feature);
      }
    });
    
  },
  methods: {
    onMapPointerMove({ pixel }) {
      let hit = this.$refs.map.forEachFeatureAtPixel(pixel, () => true);

      if (hit) {
        this.mapCursor = "pointer";
      } else {
        this.mapCursor = "default";
      }
    }
  }
};
</script>
<style scoped>
#mapDiv {
  height: 100vh;
  width: 100%;
}
</style>