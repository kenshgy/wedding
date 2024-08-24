<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import img1 from '@/assets/koma01.jpg'
import img2 from '@/assets/koma02.jpg'
import img3 from '@/assets/koma03.jpg'

const props = defineProps({
  imageList: {
    type: Array<string>,
    default: [img1, img2, img3]
  }
})
const { name } = useDisplay()
const height = computed(() => {
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
  <v-carousel :show-arrows="false" hide-delimiters cycle :height="height">
    <v-carousel-item v-for="(img, i) in props.imageList" :key="i" :src="props.imageList[i]" cover>
    </v-carousel-item>
  </v-carousel>
</template>
