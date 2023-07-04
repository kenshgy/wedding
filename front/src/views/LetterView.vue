<script setup lang="ts">
import LetterCard from '@/components/LetterCard.vue'
import router from '@/router'
import { reactive, ref } from 'vue'
const openLetterFlag = ref<boolean>(false)

async function openLetter() {
  await new Promise((resolve) => setTimeout(resolve, 500))
  router.push('/invitation')
}
</script>

<template>
  <letter-card @click="openLetter" />
</template>
