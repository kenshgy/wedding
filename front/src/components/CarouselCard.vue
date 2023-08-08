<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import img1 from '@/assets/od0047.jpg'
import img2 from '@/assets/od0003.jpg'
import img3 from '@/assets/od0162.jpg'

const imgList = [img1, img2, img3]

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
