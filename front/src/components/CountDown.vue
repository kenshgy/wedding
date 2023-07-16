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
      <v-col class="py-0">
        <div class="time">
          {{ count.date }}
        </div>
        <div class="time_sub">DAYS</div>
      </v-col>
    </v-row>
    <v-row style="font-size: 30px">
      <v-col cols="4">
        <div class="time">
          {{ count.hour }}
        </div>
        <div class="time_sub">HOURS</div>
      </v-col>
      <v-col cols="4">
        <div class="time">
          {{ count.minute }}
        </div>
        <div class="time_sub">MINUTES</div>
      </v-col>
      <v-col cols="4">
        <div class="time">
          {{ count.second }}
        </div>
        <div class="time_sub">SECONDS</div>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.countdown {
  background-color: pink;
  background-image: url('../assets/flowerback.png');
  color: white;
}
.time {
  font-size: 50px;
}
.time_sub {
  font-size: 15px;
}
</style>
