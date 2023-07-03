<script setup lang="ts">
import { reactive } from 'vue'

const menu = reactive({
  drawer: false,
  group: null
})
</script>
<template>
  <v-app-bar color="info">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-nav-icon @click="menu.drawer = true"></v-app-bar-nav-icon>
    <v-app-bar-title> Ken & Miki Wedding </v-app-bar-title>
    <v-navigation-drawer v-model="menu.drawer" absolute temporary> </v-navigation-drawer>
  </v-app-bar>
</template>
