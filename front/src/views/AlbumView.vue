<template>
  <div v-for="(item, index) in imageList" :key="index">
    <v-img
      :src="`https://kenmiki-wedding-photo.s3.amazonaws.com/` + item"
      max-height="150"
      max-width="250"
    />
  </div>
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
  const combinedList = new Set([...imageList.value, ...result])
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
