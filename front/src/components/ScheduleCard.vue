<script setup lang="ts">
import type { Schedule } from '@/components/schedule'

const props = defineProps({
  schedule: {
    type: Array<Schedule>,
    required: true
  }
})
</script>
<template>
  <v-card class="mx-5 mt-4 mb-n10 schedule-bg" style="z-index: 100">
    <div class="text-center title">Schedule</div>

    <v-card-subtitle class="text-center pt-4"> 2023年11月26日(日) </v-card-subtitle>

    <v-timeline class="mx-10" density="compact">
      <v-timeline-item
        v-for="(item, index) in props.schedule"
        size="x-small"
        :dot-color="item.color"
        :key="index"
      >
        <div class="mb-4">
          <div class="font-weight-normal">{{ item.time }}</div>
          <div>
            {{ item.title }}
            <a v-if="item.locationLink !== ''" :href="item.locationLink"> ＠{{ item.location }} </a>
            <br />
            <!-- <p v-if="item.comment !== []">{{ item.comment }}</p> -->
            <div v-for="(comment, i) in item.comment" :key="i">
              <p>{{ comment }}</p>
            </div>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>

<style scoped>
.decolation {
  background: url('../assets/flowerback.png');
  background-size: cover;
  background-position: center center;
  background-color: 'red';
}

.schedule-bg {
  background-image: linear-gradient(0deg, rgb(254, 240, 238), rgba(255, 255, 255, 1) 55%);
}
</style>
