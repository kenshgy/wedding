<script setup lang="ts">
import type { PropType } from 'vue'
import { useRoute } from 'vue-router'

// const props = withDefaults(defineProps<LocationInfo>(), {})

const props = defineProps({
  location: {
    type: String,
    required: true
  }
})
const route = useRoute()
const path = route.path
</script>
<template>
  <v-row class="pa-4 mt-10" align="center">
    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
      <div class="text-center">
        明治神宮/明治記念館 <br />
        <a href="https://www.meijikinenkan.gr.jp/access/">
          https://www.meijikinenkan.gr.jp/access/
        </a>
        <br />
        東京都渋谷区代々木神園町１−１<br />
        * 挙式と披露宴で場所が異なります<br />
        ご注意ください<br /><br />
        18時20分までにお控室へお集まりください<br />
        <p v-if="path === '/invitation'">
          結婚式に列席していただける方につきましては<br />
          15時50分までに神楽殿控室へご光来のほどよろしくお願いします<br />
        </p>
      </div>
    </v-col>
    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
      <div class="text-center googlemap">
        <iframe
          :src="props.location"
          width="350"
          height="250"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </v-col>
  </v-row>
</template>

<style>
.googlemap {
  height: auto;
  overflow: hidden;
  position: relative;
  /* padding-top: 20%; */
}

.googlemap iflame {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
</style>
