<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'

import img1 from '@/assets/hand.jpg'
import img2 from '@/assets/2shot.jpg'
import img3 from '@/assets/flight.jpg'
import img4 from '@/assets/disney.jpg'
import img5 from '@/assets/date.jpg'

const imgList = [img1, img2, img3, img4, img5]

const { name } = useDisplay()
const height = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case 'xs':
      return 220
    case 'sm':
      return 400
    case 'md':
      return 500
    case 'lg':
      return 600
    case 'xl':
      return 800
    case 'xxl':
      return 1200
  }
  return undefined
})
</script>
<template>
  <v-carousel :show-arrows="false" hide-delimiters cycle interval :height="height">
    <v-carousel-item v-for="(img, i) in imgList" :key="i" :src="imgList[i]" cover>
    </v-carousel-item>
  </v-carousel>
</template>
