<script setup lang="ts">
import { Loader } from '@googlemaps/js-api-loader'
import { ref } from 'vue'

const apiKeyGoogleMaps = 'AIzaSyCT3zVmd8jWxfvagVhPFYVwXnu5lKDEofQ'

const apiOptions = {
  apiKey: apiKeyGoogleMaps
}

const loader = new Loader(apiOptions)

loader.load().then(() => {
  console.log('Maps JS API loaded')
  const map = displayMap()
  console.log(map)
})

function displayMap() {
  const mapOptions = {
    center: { lat: -33.860664, lng: 151.208138 },
    zoom: 14,
    mapId: 'Wedding'
  }
  const mapDiv = document.getElementById('map') as HTMLElement
  // eslint-disable-next-line no-undef
  return new google.maps.Map(mapDiv, mapOptions)
}
</script>

<template>
  <div id="map">aaa</div>
</template>
