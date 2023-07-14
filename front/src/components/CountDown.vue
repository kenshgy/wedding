<script setup lang="ts">
import { reactive } from 'vue'

const target = new Date(2023, 10, 26, 17, 40).getTime()
const count = reactive({
  date: 0,
  hour: 0,
  minute: 0,
  second: 0
})
function countdown() {
  console.log('count down')

  const diff = target - Date.now()
  const numbers = [
    diff / 1000 / 60 / 60 / 24,
    (diff / 1000 / 60 / 60) % 24,
    (diff / 1000 / 60) % 60,
    (diff / 1000) % 60
  ]
  count.date = Math.floor(numbers[0])
  count.hour = Math.floor(numbers[1])
  count.minute = Math.floor(numbers[2])
  count.second = Math.floor(numbers[3])
}
function startCountDown(): void {
  setInterval(countdown, 1000)
}
startCountDown()
</script>

<template>
  <v-card class="countdown text-center">
    <v-row>
      <v-col style="font-size: 30px"> Count Down </v-col>
    </v-row>
    <v-row>
      <v-col style="font-size: 50px"> {{ count.date }}<br />DAYS </v-col>
    </v-row>
    <v-row style="font-size: 30px">
      <v-col> {{ count.hour }}<br />Hours </v-col>
      <v-col> {{ count.minute }}<br />Minutes </v-col>
      <v-col> {{ count.second }}<br />Seconds </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.countdown {
  background-color: pink;
  background-image: url('../assets/flowerback.png');
  color: white;
  font-family: 'Jomolhari';
}
</style>
