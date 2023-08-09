<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <v-app>
    <v-main :class="{ 'home-page': $route.path === '/', 'invitation-page': $route.path === '/invitation' }">
      <v-container>
        <RouterView />
        <the-footer />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
/* フォントの変更 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tangerine&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');

/* 全体的なフォント */
.v-application {
  font-family: 'Noto Serif JP';
  font-size: 14px;
}

/* 英語のタイトル部分のフォント */
.title {
  font-family: 'Tangerine', cursive;
  font-size: 65px;
}

.invitation-page {
  background: url('@/assets/pink.jpg');
  background-size: cover;
}

.home-page {
  background: url('@/assets/flowerback.png');
}
</style>
