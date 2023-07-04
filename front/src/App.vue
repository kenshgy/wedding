<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <RouterView />
        <the-footer />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
/* フォントの変更 */
/* @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap');

.v-application {
  font-family: 'Noto Serif JP';
  font-size: 16px;
}
</style>
