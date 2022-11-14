import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
      template: {
        compilerOptions: {
          // i am ignorning my custom '<container>' tag
          isCustomElement: (tag) => ['container'].includes(tag)
        }
      }
    }
  )],
  resolve: {
    extensions: [
                ".mjs",
                ".js",
                ".ts",
                ".jsx",
                ".tsx",
                ".json",
                ".vue",
                ".scss",
              ],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
