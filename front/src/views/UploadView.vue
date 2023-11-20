<template>
  <div>
    <input type="file" @change="handleFileUpload" />
    <button @click="uploadFile">写真をアップロード</button>
    {{ selectedFile?.name }}
    <img
      :src="(imagePreview as string)"
      v-if="imagePreview"
      style="max-width: 300px; margin-top: 20px"
      alt="Preview"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import fileUpload from '@/services/file-upload'

const selectedFile = ref<File | null>(null)
const imagePreview = ref<string | ArrayBuffer | null>('')

// ファイル選択時の処理
function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    selectedFile.value = target.files[0]
    const reader = new FileReader()

    reader.onload = () => {
      // ファイルの読み込みが完了したら、プレビューを表示する
      imagePreview.value = reader.result
    }
    // 画像ファイルを読み込む
    reader.readAsDataURL(target.files[0])
  }
}

async function createPresignedUrlWithClient() {
  return await fileUpload.get(selectedFile.value?.name as string)
}

async function put(url: string | URL, data: any) {
  const uploadResponse = axios.put(url as string, data, {
    headers: {
      'Content-Type': data.type
    }
  })
  await uploadResponse
}

async function uploadFile() {
  try {
    const response = await createPresignedUrlWithClient()

    console.log('Calling PUT using presigned URL with client')
    await put(response.url, selectedFile.value?.stream)

    console.log('\nDone. Check your S3 console.')
  } catch (err) {
    console.error(err)
  }
}
</script>
