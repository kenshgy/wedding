<script setup lang="ts">
import CarouselCard from './CarouselCard.vue'
import MessageCard from './MessageCard.vue'
import FormCard from './FormCard.vue'
import ScheduleCard from './ScheduleCard.vue'
// import LocationCard from './LocationCard.vue'
import GoogleMap from './GoogleMap.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

// color
// https://vuetifyjs.com/en/styles/colors/
</script>

<template>
  <the-header />
  <carousel-card />
  <message-card />
  <schedule-card />
  <!-- <location-card /> -->
  <GoogleMap />
  <form-card />
  <the-footer />
</template>
