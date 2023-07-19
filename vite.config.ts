import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'
import { readdirSync } from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    __SUPPORT_LOCALES__: JSON.stringify(readdirSync(resolve(__dirname, './src/locales/')))
  }
})
