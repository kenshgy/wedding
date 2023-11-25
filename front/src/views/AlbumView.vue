<template>
  <v-row class="d-md-none" justify="end">
    <v-col>
      <v-btn @click="() => router.push('/upload')">戻る</v-btn>
    </v-col>
  </v-row>
  <v-row>
    <v-col v-for="j in imageList" :key="j" cols="12" md="4" align-self="center">
      <v-img :src="`https://kenmiki-wedding-photo.s3.amazonaws.com/` + j.name" class="mb-4 mx-2" />
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import getPhotoListApi from '@/services/get-photoList'
import { onMounted } from 'vue'
import router from '@/router'

const start = ''
interface PhotoInfo {
  name: string
  size: string
  lastModified: string
  presignedUrl: string
}
let imageList = ref<PhotoInfo[]>([])

function parseDate(dateString: string) {
  const [year, month, day, hour, minute, second] = dateString.split(/\/|:|\s/).map(Number)
  return new Date(year, month - 1, day, hour, minute, second)
}

async function getPhotoList(startAfter: string) {
  const response: PhotoInfo[] = await getPhotoListApi.get(startAfter)
  response.sort((a, b) => {
    const dateA = parseDate(a.lastModified)
    const dateB = parseDate(b.lastModified)
    return dateB.getTime() - dateA.getTime()
  })

  const lastStoredTimestamp =
    imageList.value.length > 0 ? new Date(imageList.value[0].lastModified).getTime() : 0

  const newPhotos = response.filter((photo) => {
    const photoTimestamp = new Date(photo.lastModified).getTime()
    return photoTimestamp > lastStoredTimestamp
  })

  imageList.value.unshift(...newPhotos)
  return newPhotos
}

onMounted(async () => {
  imageList.value = await getPhotoList(start)
  setInterval(async () => {
    await getPhotoList(start)
  }, 10000)
})
</script>
