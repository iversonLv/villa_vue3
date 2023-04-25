<template>
  <GoogleMap
      class="map"
      :center="center"
      :zoom="config.MAP_ZOOM"
    >
    <Marker :options="markerOptions" />
  </GoogleMap>
</template>

<script>
  import { inject } from 'vue'
  
  // google map
  import { GoogleMap, Marker } from 'vue3-google-map'

  // config
  import config from '../config'

  export default {
    name: 'VillaMap',
    components: {
      GoogleMap,
      Marker,
    },
    setup() {
      const center = inject('center')
      const markerOptions = inject('markerOptions')
      return {
        config,

        center,
        markerOptions,
      }
    }
  }
</script>
<style lang="scss">
  .map {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    .map {
      height: 300px;
    }
  }
</style>
