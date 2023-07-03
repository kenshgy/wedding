<script setup lang="ts"></script>
<template>
  <v-card class="mx-auto">
    <v-img
      class="align-end text-white"
      height="200"
      src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
      cover
    >
    </v-img>
    <v-card-title>Schedule</v-card-title>

    <v-card-subtitle class="pt-4"> Sunday, Nov 26th </v-card-subtitle>

    <v-card-text>
      <v-timeline density="compact" align="start">
        <v-timeline-item size="x-small" dot-color="orange-darken-3">
          <div class="mb-4">
            <div class="font-weight-normal">@17:40</div>
            <div>Start Wedding Ceremony</div>
            <a href="https://www.meijikinenkan.gr.jp/wedding/shinzen/jingu-wed.html"> @Secret </a>
          </div>
        </v-timeline-item>
        <v-timeline-item size="x-small" dot-color="red-darken-1">
          <div class="mb-4">
            <div class="font-weight-normal">@18:50</div>
            <div>Start Wedding Reception</div>
          </div>
        </v-timeline-item>
        <v-timeline-item size="x-small" dot-color="indigo-darken-4">
          <div class="mb-4">
            <div class="font-weight-normal">@21:20</div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
    <v-btn size="small" color="red" variant="text" icon="mdi-heart">
      <v-icon color="red" icon="mdi-heart">mdi-heart</v-icon>
    </v-btn>
  </v-card>
</template>
