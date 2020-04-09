<template>
  <div id="map">
    <h1>Map</h1>
    <div id="demoMap" />
    <v-btn 
      color="error" 
      @click="addRandomMarker"
    >
      Add random marker
    </v-btn>
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
import { Style, Fill, Stroke } from "ol/style";
import CircleStyle from "ol/style/Circle"

const markerStyle = new Style({
  image: new CircleStyle({
    fill: new Fill({color: 'red'}),
    stroke: new Stroke({color: 'black', width: 2}),
    radius: 10,
  })
})

export default {
  name: "Map",
  data: function() {
    return {
      map: null,
      locations: [
        [12.5, 41.9],
        [-0.12755, 51.507222],
        [-3.683333, 40.4],
        [2.896372, 44.60240],
        [3.2, 51.2],
      ],
      view: {
        center: [359273.142197, 6658544.189464], //EPSG:3857 coordinate format
        zoom: 10
      }
    }
  },
  mounted: function() {
    this.map = this.createMap("demoMap")
  },
  methods: {
    createMap: function(target) {
      const tileLayer = this.createTileLayer()
      const vectorLayer = this.createVectorLayer()
      const view = this.createView(this.view.center, this.view.zoom)
      return new Map({
        target,     // ~= target: target
        layers: [ tileLayer, vectorLayer],
        view
      });
    },
    createView: function( center, zoom){
      return new View({ center, zoom })
    },
    createTileLayer: function() {
      return new TileLayer({
        source: new OSM()
      })
    },
    createVectorLayer: function() {
      const features = this.locations.map( location => {
        return new Feature({ geometry: new Point(fromLonLat( location )) } )
      })
      return new VectorLayer({
        source: new VectorSource({ features }),
        style: markerStyle
      })
    },
    addRandomMarker: function() {
      const lat = 3.0 + Math.random()
      const long = 51.0 + Math.random()
      console.log(`add makerker at: ${lat}, ${long}`)
      this.locations.push(
        new Feature({ geometry: new Point(fromLonLat([lat, long])) })
      )
    }
  }
};
</script>

<style lang="scss">
@import "ol/ol";

#demoMap {
  height: 900px;
}
</style>
