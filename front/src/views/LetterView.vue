<script setup lang="ts">
import LetterCard from '@/components/LetterCard.vue'
import InvitationContents from '@/components/InvitationContents.vue'
import router from '@/router'
import { ref } from 'vue'

async function openLetter() {
  await new Promise((resolve) => setTimeout(resolve, 500))
  // router.push('/invitation')
  dialog.value = true
}

const dialog = ref(false)
</script>

<template>
  <letter-card @click="openLetter" />
  <v-dialog v-model="dialog" scrollable>
    <v-card>
      <v-card-text>
        <invitation-contents />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
