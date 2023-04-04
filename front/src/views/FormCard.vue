<script setup lang="ts">
import { reactive } from 'vue'

const userOption = reactive({
  select: true
})
const input = reactive({
  SirName: '',
  FirstName: '',
  SirKana: '',
  FirstKana: ''
})
</script>
<template>
  <v-card>
    <v-card-title>RSVP</v-card-title>
    <v-card-text>
      お手数ではございますが、出席情報のご登録をお願い申し上げます
      <v-radio-group v-model="userOption.select" inline>
        <v-radio label="出席" value="true" color="red"></v-radio>
        <v-radio label="欠席" value="false" color="blue"></v-radio>
      </v-radio-group>
      <v-form>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="input.SirName"
              label="姓"
              required
              density="compact"
              variant="solo"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="input.SirName"
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
              v-model="input.SirName"
              label="せい"
              required
              density="compact"
              variant="solo"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="input.SirName"
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
              v-model="input.SirName"
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
              v-model="input.SirName"
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
              v-model="input.SirName"
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
              v-model="input.SirName"
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
              v-model="input.SirName"
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
              v-model="input.SirName"
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
              v-model="input.SirName"
              label="メッセージ"
              required
              density="compact"
              variant="solo"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col>
            <v-btn> 送信 </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>
