<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <v-app>
    <v-main :class="{'home-page': $route.path === '/', 'invitation-page': $route.path === '/invitation'}">
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
  /* background-image: linear-gradient(0deg, rgba(251, 213, 251, 1), rgba(149, 233, 243, 1)); */
  /* background-image: linear-gradient(0deg, rgba(243, 170, 196, 1), rgba(246, 190, 232, 1) 33%, rgba(255, 247, 216, 1) 76%, rgba(183, 187, 255, 1)); */
  /* background-image: linear-gradient(0deg, rgba(255, 209, 205, 1), rgba(240, 226, 226, 1)); */
  /* background-image: radial-gradient(rgba(240, 226, 226, 1) 30%, rgba(253, 177, 170, 1)); */

  /* background: url('@/assets/test.jpg'); */
  background: url('@/assets/test2.jpg');
  /* background: url('@/assets/test3.jpg'); */
  background-size: cover;
}

.home-page {
  /* background-image: radial-gradient(rgba(240, 226, 226, 1) 30%, rgba(253, 177, 170, 1)); */
  /* background: "#e3b0bf", */
  /* background-color: #e3b0bf; */
  /* background-color: #fddfdd; */
  background-color: #ffeded;
  background: url('@/assets/flowerback.png');
  background-size: cover;
}
</style>
