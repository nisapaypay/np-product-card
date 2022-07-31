import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/assets', import.meta.url))
    }
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/ProductCardPlugin.js",
      formats: ["es", "cjs"],
      name: "ProductCardPlugin",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs")
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        }
      }
    }
  }
})
