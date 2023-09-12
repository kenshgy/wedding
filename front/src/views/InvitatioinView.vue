<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import type { Schedule } from '@/components/schedule'
import InvitationContents from '@/components/InvitationContents.vue'
import LetterCard from '@/components/LetterCard.vue'
import TheFooter from '@/components/TheFooter.vue'

const props = defineProps({
  schedule: {
    type: Array<Schedule>,
    required: true
  },
  location: {
    type: String,
    required: true
  }
})

const showEnvelope = ref(true)
const showLetter = ref(false)
if (sessionStorage.getItem('isLetterOpen') === 'true') {
  showEnvelope.value = false
  showLetter.value = true
}

function openLetter() {
  showEnvelope.value = false
  setTimeout(() => (showLetter.value = true), 500)
  sessionStorage.setItem('isLetterOpen', 'true')
}

onUnmounted(() => {
  sessionStorage.removeItem('isLetterOpen')
})
</script>

<template>
  <Transition>
    <letter-card v-if="showEnvelope" @click="openLetter" />
  </Transition>
  <Transition>
    <div v-if="showLetter">
      <invitation-contents :schedule="props.schedule" :location="props.location" />
      <the-footer />
    </div>
  </Transition>
</template>

<style scoped>
.v-leave-active,
.v-enter-active {
  transition: opacity 0.5s;
}
.v-leave-from,
.v-enter-to {
  opacity: 1;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
