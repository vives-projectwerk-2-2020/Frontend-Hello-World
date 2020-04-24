<template>
  <div id="map">
    <div id="demoMap" />
  </div>
</template>

<script>

// Example of: https://www.npmjs.com/package/ol

import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import * as olProj from 'ol/proj';

export default {
    name:'Map',
    data: () => ({
        // htmlcontent: '<h1>tjoep</h1>
    }),
    mounted: () => {

      const place = olProj.transform([3.22424, 51.20892], 'EPSG:4326', 'EPSG:3857');

      new Map({
        target: 'demoMap',
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: place,
          zoom: 10
        }),

        
      });
    },methods: {

    }
}
</script>

<style lang="scss">
@import "ol/ol";

.template{
  padding: 0px;
}

#demoMap {
  height: 100vh;
  width: 100%;
}
</style>
