<template>
  <div id="map">
    <h1>Map</h1>
    <div id="demoMap" />
  </div>
</template>

<script>
// Example of: https://www.npmjs.com/package/ol

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
export default {
  name: "Map",
  data: () => ({
    // htmlcontent: '<h1>tjoep</h1>
  }),
  mounted: () => {
      new Map({
        target: 'demoMap',
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: [359273.142197,6658544.189464],//EPSG:3857 coordinate format
          zoom: 10
        }),
      });
    }
};
</script>

<style lang="scss">
@import "ol/ol";

#demoMap {
  height: 900px;
}
</style>
