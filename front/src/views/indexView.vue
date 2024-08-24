<script setup lang="ts">
import router from '@/router'
import { reactive } from 'vue'

const form = reactive({
  input: ''
})
async function submit() {
  router.push(form.input)
}
</script>

<template>
  <v-form @submit.prevent="">
    <v-text-field
      v-model="form.input"
      label="Enter path"
      persistent-hint
      variant="outlined"
      density="compact"
      @keyup.enter="submit"
    >
    </v-text-field>
    <v-btn density="compact" color="#996463" @click="submit">submit</v-btn>
  </v-form>
</template>
