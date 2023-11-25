<template>
  <div v-if="!uploadSuccess">
    <v-row>
      <v-col>
        <p>皆さんに結婚式を楽しんでもらいたいと思い 写真を共有するアプリを2人で作成しました!</p>
        <p>写真をアップロードするとモニターに映るので写真を撮ってアップロードしてみてください</p>
        <p>皆さんに楽しんでいただけると幸いです</p>

        <input type="file" @change="handleFileUpload" />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn v-if="selectedFile" @click="uploadFile">選択した写真をアップロードする</v-btn>
        <img
          :src="(imagePreview as string)"
          v-if="imagePreview"
          style="max-width: 300px; margin-top: 20px"
          alt="Preview"
        />
      </v-col>
    </v-row>
  </div>
  <div v-else>
    <v-row>
      <v-col>
        <p>ありがとうございます♡ アップロードできました!</p>
        <v-btn @click="reset">別の写真をアップする</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <p>
          アップロードした写真は
          <a href="https://kenmiki.com/album">ここから</a>
          スマホでも見れます！
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import getSignedUrl from '@/services/get-signedUrl'
import putS3 from '@/services/put-s3'
import router from '@/router'

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
