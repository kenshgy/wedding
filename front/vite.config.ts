import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    // Permissions-Policy ヘッダーに 'interest-cohort' を追加する
    headers: {
      'Permissions-Policy': 'interest-cohort=()'
    },
    host: true,
  },
  base: "happy-wedding",
  build: {
    outDir: "../docs"
  },
})
