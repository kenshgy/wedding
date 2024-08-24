<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <v-app>
    <v-main
      :class="{
        'home-page': route.path === '/',
        'invitation-page': route.path !== '/'
      }"
    >
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
/* フォントの変更 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cookie&family=Dancing+Script:wght@500&display=swap');

/* 全体的なフォント */
.v-application {
  font-family: 'Noto Serif JP';
  font-size: 14px;
}

/* 英語のタイトル部分のフォント */
.title {
  font-family: 'Great Vibes', cursive;
  font-size: 65px;
}

.invitation-page {
  background: url('@/assets/pink.jpg');
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
}

.home-page {
  background: url('@/assets/flowerback.png');
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
}
</style>
