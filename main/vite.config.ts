import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/qiankun',
  server: {
    host: '0.0.0.0',
    port: 6003,
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
  }
})
