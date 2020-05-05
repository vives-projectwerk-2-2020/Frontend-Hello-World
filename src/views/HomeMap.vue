<template>
  <div>
    <p>Features: {{ features }}</p>
    <vl-map
      ref="map"
      data-projection="EPSG:4326"
      @pointermove="onMapPointerMove"
      :style="{cursor: mapCursor}"
      style="height: 400px"
    >
      <vl-view :zoom.sync="zoom" :center.sync="center"></vl-view>

      <vl-layer-tile>
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <vl-interaction-select :features.sync="selected">
        <vl-style-box>
          <vl-style-icon
            src="https://img.icons8.com/ultraviolet/50/000000/place-marker.png"
            :anchor="[0.5, 1]"
          ></vl-style-icon>
        </vl-style-box>
      </vl-interaction-select>

      <vl-layer-vector>
        <vl-source-vector>
          <vl-feature v-for="(feature,idx) in features" :key="idx" :id="feature.id">
            <vl-geom-point :coordinates.sync="feature.geometry.coordinates"></vl-geom-point>
          </vl-feature>

          <vl-style-box>
            <vl-style-icon
              src="https://img.icons8.com/office/50/000000/place-marker.png"
              :anchor="[0.5, 1]"
            ></vl-style-icon>
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
import "vuelayers/lib/style.css"; // needs css-loader

Vue.use(VueLayers);
Vue.use(VueLayers, {
  dataProjection: "EPSG:4326"
});
export default {
  data() {
    return {
      zoom: 3,
      center: [25.25135774256233, 45.39334701133322],
      selected: [],
      mapCursor: "default",
      features: [
        {
          type: "Feature",
          id: "marker",
          properties: {},
          geometry: {
            type: "Point",
            coordinates: [25.25135774256233, 45.39334701133322]
          }
        }
      ]
    };
  },
  mounted() {
    setInterval(() => {
      let feature = this.features[0];
      feature.geometry.coordinates = [
        feature.geometry.coordinates[0] + Math.random(),
        feature.geometry.coordinates[1] + Math.random()
      ];
    }, 2000);
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