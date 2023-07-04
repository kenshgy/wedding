<script setup lang="ts">
import LetterCard from '@/components/LetterCard.vue'
import InvitationContents from '@/components/InvitationContents.vue'
import { reactive, ref } from 'vue'

// color
// https://vuetifyjs.com/en/styles/colors/
const openLetterFlag = ref<boolean>(false)

async function openLetter() {
  // await new Promise((resolve) => setTimeout(resolve, 800))
  openLetterFlag.value = !openLetterFlag.value
}
</script>

<template>
  <invitation-contents />
</template>
