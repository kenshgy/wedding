<template>
  <v-row>
    <v-col v-for="j in imageList" :key="j" cols="3">
      <v-img
        :src="`https://kenmiki-wedding-photo.s3.amazonaws.com/` + j"
        max-width="400"
        class="mb-4 mx-2"
      />
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import getPhotoListApi from '@/services/get-photoList'
import { onMounted } from 'vue'

const start = ''
let imageList = ref([{ presignedUrl: String }])
// const rowCount = ref(0)
// const colCount = ref(0)

async function getPhotoList(startAfter: string) {
  const response = await getPhotoListApi.get(startAfter)
  const result = response.map((item: { name: string }) => item.name)
  const combinedList = new Set([...result, ...imageList.value])
  imageList.value = Array.from(combinedList)
  return result
}
onMounted(async () => {
  imageList.value = await getPhotoList(start)
  setInterval(async () => {
    await getPhotoList(start)
  }, 10000)
})
</script>
