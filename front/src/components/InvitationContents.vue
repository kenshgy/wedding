<script setup lang="ts">
import CarouselCard from './CarouselCard.vue'
import MessageCard from './MessageCard.vue'
import FormCard from './FormCard.vue'
import ScheduleCard from './ScheduleCard.vue'
import LocationCard from '@/components/LocationCard.vue'
</script>

<template>
  <v-card class="pa-4">
    <v-row>
      <v-col cols="12" lg="6" md="6" sm="12" xs="12">
        <carousel-card />
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12" xs="12">
        <message-card />
      </v-col>
    </v-row>
  </v-card>
  <schedule-card />
  <v-card>
    <location-card />
    <form-card />
  </v-card>
</template>
