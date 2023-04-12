<script setup lang="ts">
import { reactive, ref } from 'vue'

const userOption = ref(true)
const input = reactive({
  FamilyName: '',
  FirstName: '',
  KanaFamilyName: '',
  KanaFirstName: '',
  postcode: '',
  address: '',
  building: '',
  phoneNumber: '',
  email: '',
  allergy: '',
  message: ''
})
</script>
<template>
  <v-card>
    <v-card-title>RSVP</v-card-title>
    <v-card-text>
      お手数ではございますが、出席情報のご登録をお願い申し上げます
      <v-form>
        <v-row>
          <v-col>
            <v-radio-group v-model="userOption" inline>
              <v-radio label="出席" :value="true"></v-radio>
              <v-radio label="欠席" :value="false"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="input.FamilyName"
              label="姓"
              required
              density="compact"
              variant="solo"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="input.FirstName"
              label="名"
              required
              density="compact"
              variant="solo"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="input.KanaFamilyName"
              label="せい"
              required
              density="compact"
              variant="solo"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="input.KanaFirstName"
              label="めい"
              required
              density="compact"
              variant="solo"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="input.postcode"
              label="〒"
              required
              density="compact"
              variant="solo"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="input.address"
              label="住所"
              required
              density="compact"
              variant="solo"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="input.building"
              label="建物名"
              required
              density="compact"
              variant="solo"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="input.phoneNumber"
              label="電話番号"
              required
              density="compact"
              variant="solo"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="input.email"
              label="メールアドレス"
              required
              density="compact"
              variant="solo"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="input.allergy"
              label="アレルギー"
              required
              density="compact"
              variant="solo"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="input.message"
              label="メッセージ"
              required
              density="compact"
              variant="solo"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn> 送信 </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>
