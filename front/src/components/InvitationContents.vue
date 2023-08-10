<script setup lang="ts">
import type { Schedule } from '@/components/schedule'
import CarouselCard from './CarouselCard.vue'
import MessageCard from './MessageCard.vue'
import FormCard from './FormCard.vue'
import ScheduleCard from './ScheduleCard.vue'
import LocationCard from '@/components/LocationCard.vue'
import CountDown from '@/components/CountDown.vue'
import img1 from '@/assets/koma01.jpg'
import img2 from '@/assets/koma02.jpg'
import img3 from '@/assets/koma03.jpg'
import img5 from '@/assets/od0257.jpg'
import img7 from '@/assets/od0051.jpg'
import img8 from '@/assets/od0241.jpg'
import img9 from '@/assets/od0291.jpg'

const topImages = [img5, img7, img9, img8]
const middleImages = [img1, img2, img3]

const props = defineProps({
  schedule: {
    type: Array<Schedule>,
    required: true
  }
})
</script>

<template>
  <v-card class="pa-4">
    <v-row>
      <v-col cols="12" lg="6" md="6" sm="12" xs="12">
        <CarouselCard :image-list="topImages" />
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12" xs="12">
        <MessageCard />
      </v-col>
    </v-row>
  </v-card>
  <CountDown class="mt-4" />
  <CarouselCard :image-list="middleImages" class="mt-4" />
  <ScheduleCard :schedule="props.schedule" />
  <v-card>
    <LocationCard />
    <FormCard />
  </v-card>
</template>

<style scoped></style>
