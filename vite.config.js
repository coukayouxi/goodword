import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages 部署在 https://<user>.github.io/<repo>/ 子路径下，
// CI 中通过 VITE_BASE 环境变量注入；本地开发/构建默认 '/'
export default defineConfig({
  plugins: [vue()],
  base: process.env.VITE_BASE || '/',
  server: {
    host: true,
    port: 5173
  }
})
