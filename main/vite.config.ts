import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './qiankun',
  server: {
    port: 7001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
