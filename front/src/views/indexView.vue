<script setup lang="ts">
import router from '@/router'
import { reactive } from 'vue'

const form = reactive({
  input: ''
})
const friends = '0708'
const com = 'ideal'
async function submit() {
  if (form.input === com) {
    router.push('/invite')
  } else if (form.input === friends) {
    router.push('/invitation')
  }
}
</script>

<template>
  <v-form @submit.prevent="">
    <v-text-field
      v-model="form.input"
      label="Enter Password"
      persistent-hint
      variant="outlined"
      density="compact"
      @keyup.enter="submit"
    >
    </v-text-field>
    <v-btn density="compact" color="#996463" @click="submit">submit</v-btn>
  </v-form>
</template>
