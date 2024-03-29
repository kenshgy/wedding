<template>
  <div v-if="!uploadSuccess">
    <v-card class="pa-4">
      <p>皆さんに結婚式を楽しんでもらいたいと思い 写真を共有するアプリを2人で作成しました!</p>
      <p>写真をアップロードするとモニターに映るので写真を撮ってアップロードしてみてください</p>
      <p>皆さんに楽しんでいただけると幸いです</p>
      <p>動画は非対応です！</p>
      <input class="ma-4" type="file" @change="handleFileUpload" />
    </v-card>
    <v-row class="ma-4" justify="center">
      <v-col cols="auto">
        <img
          :src="(imagePreview as string)"
          v-if="imagePreview"
          style="max-width: 300px; margin-top: 20px"
          alt="Preview"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="auto">
        <v-btn v-if="selectedFile" @click="uploadFile" color="pink">
          <v-icon start icon="mdi-send"></v-icon>
          選択した写真をアップロードする
        </v-btn>
      </v-col>
    </v-row>
  </div>
  <div v-else>
    <v-card class="pa-4">
      <p class="">ありがとうございます♡ アップロードできました!</p>
      <v-btn class="mt-4" @click="reset" color="pink">別の写真をアップする</v-btn>

      <p class="pt-4">
        アップロードした写真は
        <a href="https://kenmiki.com/album">こちらから</a>
        スマホでも見れます！
      </p>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import getSignedUrl from '@/services/get-signedUrl'
import putS3 from '@/services/put-s3'

const selectedFile = ref<File | null>(null)
const imagePreview = ref<string | ArrayBuffer | null>('')
const uploadSuccess = ref(false)

// ファイル選択時の処理
function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    selectedFile.value = target.files[0]
    const reader = new FileReader()
    console.log(selectedFile.value?.type)

    reader.onload = () => {
      // ファイルの読み込みが完了したら、プレビューを表示する
      imagePreview.value = reader.result
    }
    // 画像ファイルを読み込む
    reader.readAsDataURL(target.files[0])
  }
}

async function createPresignedUrlWithClient() {
  const fileType = selectedFile.value?.type
  return await getSignedUrl.get(fileType as string)
}

async function put(url: string | URL, data: any) {
  await putS3.put(url, data)
}

async function uploadFile() {
  try {
    const response = await createPresignedUrlWithClient()

    console.log('Calling PUT using presigned URL with client')
    await put(response.uploadURL, selectedFile.value)
    uploadSuccess.value = true
    console.log('\nDone. Check your S3 console.')
  } catch (err) {
    console.error(err)
  }
}

function reset() {
  uploadSuccess.value = false
  selectedFile.value = null
  imagePreview.value = null
}
</script>
