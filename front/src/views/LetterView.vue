<script setup lang="ts">
import LetterCard from '@/components/LetterCard.vue'
import router from '@/router'

async function openLetter() {
  await new Promise((resolve) => setTimeout(resolve, 500))
  router.push('/invitation')
}
</script>

<template>
  <letter-card @click="openLetter" />
</template>
