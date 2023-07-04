<script setup lang="ts">
import { reactive } from 'vue'
// import { mdiDotsVertical } from '@mdi/js'

const menu = reactive({
  drawer: false,
  group: null
})
</script>
<template>
  <v-app-bar color="info">
    <!-- <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template> -->
    <v-app-bar-title> Ken & Miki Wedding </v-app-bar-title>
    <!-- <v-navigation-drawer v-model="menu.drawer" location="bottom" temporary> </v-navigation-drawer> -->
    <!-- <v-navigation-drawer v-model="drawer" location="bottom" temporary>
      <v-list :items="items"></v-list> -->
    <template v-slot:append>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>
