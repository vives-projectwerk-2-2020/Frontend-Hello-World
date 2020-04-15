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

export default {
    name:'Map',
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
          center: [0, 0],
          zoom: 2
        })
      });
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
