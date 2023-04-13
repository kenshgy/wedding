<script setup lang="ts">
import CarouselCard from './CarouselCard.vue'
import MessageCard from './MessageCard.vue'
import FormCard from './FormCard.vue'
import ScheduleCard from './ScheduleCard.vue'
import LocationCard from './LocationCard.vue'

// color
// https://vuetifyjs.com/en/styles/colors/
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-row>
          <v-col>
            <carousel-card />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <message-card />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <schedule-card />
          </v-col>
        </v-row>
        <!-- <v-row>
          <v-col>
            <location-card />
          </v-col>
        </v-row> -->
        <v-row>
          <v-col>
            <form-card />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
