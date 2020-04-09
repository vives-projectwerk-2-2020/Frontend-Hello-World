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
import Feature from 'ol/Feature';

import Point from "ol/geom/Point";
import { Vector as VectorLayer } from "ol/layer";
import { fromLonLat } from "ol/proj";
import VectorSource from "ol/source/Vector";
import { Icon, Style } from "ol/style";
// import {Fill, Icon, Stroke, Style} from 'ol/style';
export default {
  name: "Map",
  data: () => ({
    // htmlcontent: '<h1>tjoep</h1>
  }),
  mounted: () => {
    new Map({
      target: "demoMap",
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        new VectorLayer({//begin marker
          source: new VectorSource({
            features: [
              new Feature({
                geometry: new Point(
                  fromLonLat([2.896372, 44.60240])
                )
              })
            ]
          }),    
          style: new Style({
            image: new Icon({
              color: "#8959A8",
              crossOrigin: "anonymous",
              src: "images/map/square.svg"
            })
          }),
        })//end marker
      ],
      view: new View({
        center: [359273.142197, 6658544.189464], //EPSG:3857 coordinate format
        zoom: 10
      })
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
