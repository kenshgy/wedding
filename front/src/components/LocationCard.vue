<script lang="ts" setup>
import GoogleMapsApiLoader from 'google-maps-api-loader'

const googleMapApi = await GoogleMapsApiLoader({
  apiKey: 'AIzaSyB2S32_MzU_KeGaTm4u-kyTotvfjzUaPB0'
})

initializeMap()

function initializeMap() {
  console.log('init')

  const mapContainer = this.$refs.googleMap
  return new this.google.maps.Map(mapContainer, this.google)
}
</script>

<template>
  <div ref="googleMap">aaa</div>
</template>
