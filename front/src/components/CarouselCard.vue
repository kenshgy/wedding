<script setup lang="ts">
import { ref } from 'vue'
import img1 from '@/assets/hand.jpg'
import img2 from '@/assets/2shot.jpg'
import img3 from '@/assets/flight.jpg'
import img4 from '@/assets/disney.jpg'
import img5 from '@/assets/date.jpg'

const imgList = [img1, img2, img3, img4, img5]
const number = ref(0)

function moveImg() {
  if (number.value === imgList.length - 1) {
    number.value = 0
  } else {
    number.value++
  }
}

function startMoveImg(): void {
  setInterval(moveImg, 4000)
}
startMoveImg()
</script>
<template>
  <v-carousel :show-arrows="false" hide-delimiters v-model="number">
    <v-carousel-item v-for="(img, i) in imgList" :key="i" :src="imgList[i]" cover>
    </v-carousel-item>
  </v-carousel>
</template>
