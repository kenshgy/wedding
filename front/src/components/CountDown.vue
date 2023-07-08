<script setup lang="ts">
import { reactive } from 'vue'

function countdown() {
  const target = new Date(2023, 10, 26, 17, 40).getTime()
  const diff = target - Date.now()
  //   const numbers = [
  //     diff / 1000 / 60 / 60 / 24,
  //     (diff / 1000 / 60 / 60) % 24,
  //     (diff / 1000 / 60) % 60,
  //     (diff / 1000) % 60
  //   ]
  //   Array.from(document.querySelectorAll('#container > .num'), (elm, i) => {
  //     elm.textContent = `${Math.floor(numbers[i])}`.padStart(2, 0)
  //   })
}
countdown()
setInterval(countdown, 1000)
</script>

<template>
  <v-card>
    <div id="container">
      2023年1月1日まで残り
      <span class="num"></span>日 <span class="num"></span>時間 <span class="num"></span>分
      <span class="num"></span>秒
    </div>
  </v-card>
</template>

<style scoped></style>
