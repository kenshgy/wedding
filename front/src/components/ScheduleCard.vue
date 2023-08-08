<script setup lang="ts"></script>
<template>
  <v-card class="mx-5 mt-4 mb-n10" style="z-index: 100">
    <div class="text-center title">Schedule</div>

    <v-card-subtitle class="text-center pt-4"> 2023年11月26日(日) </v-card-subtitle>

    <v-timeline class="mx-10" density="compact">
      <v-timeline-item size="x-small" dot-color="orange-darken-3">
        <div class="mb-4">
          <div>
            挙式
            <a href="https://www.meijikinenkan.gr.jp/access/"> ＠明治神宮 </a>
          </div>
          <div class="font-weight-normal">17時40分</div>
        </div>
      </v-timeline-item>
      <v-timeline-item size="x-small" dot-color="red-darken-1">
        <div class="mb-4">
          <div>
            披露宴
            <a href="https://www.meijikinenkan.gr.jp/wedding/banquet/fuyou.html">
              ＠明治記念館 芙蓉
            </a>
            <br />
            明治神宮から明治記念館への移動は送迎バスをご用意しています
          </div>
          <div class="font-weight-normal">18時50分</div>
        </div>
      </v-timeline-item>
      <v-timeline-item size="x-small" dot-color="indigo-darken-4">
        <div class="mb-4">
          <div class="font-weight-normal">21時20分</div>
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
</style>
