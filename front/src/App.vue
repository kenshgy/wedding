<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <the-header />
        <RouterView />
        <the-footer />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
