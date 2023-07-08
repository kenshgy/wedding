<script setup lang="ts">
import CarouselCard from './CarouselCard.vue'
import MessageCard from './MessageCard.vue'
import FormCard from './FormCard.vue'
import ScheduleCard from './ScheduleCard.vue'
import LocationCard from '@/components/LocationCard.vue'
import CountDown from '@/components/CountDown.vue'
</script>

<template>
  <v-card class="pa-4">
    <v-row>
      <v-col cols="12" lg="6" md="6" sm="12" xs="12">
        <CarouselCard />
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12" xs="12">
        <MessageCard />
      </v-col>
    </v-row>
  </v-card>
  <CountDown class="mt-4" />
  <ScheduleCard />
  <v-card>
    <LocationCard />
    <FormCard />
  </v-card>
</template>

<style scoped>
.decolation {
  background: url('../assets/flowerback.png');
  background-size: cover;
  background-position: center center;
  background-color: 'white';
}
</style>

<style scoped>
.flower-background {
  background: url('../assets/flowerback.png');
  background-size: cover;
  background-position: center center;
}
</style>
