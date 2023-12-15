import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://githi54.github.io/weather/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@api': path.resolve(__dirname, './src/api'),
    },
  },
  plugins: [vue(), eslintPlugin()],
})
