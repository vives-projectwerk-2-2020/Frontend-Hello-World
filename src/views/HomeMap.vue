<template>
  <v-container>
    <div
      id="demoMap"
      style="height:250px"
    />
  </v-container>
</template>

<script>
import Sidebar from '../components/Sidebar'

// import vuetify from '@/plugins/vuetify'


export default {
  name: 'App',
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

<style scoped>
</style>
