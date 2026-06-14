import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // Buni qo'shing
export default defineConfig({
  
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // @ belgisini src papkasiga bog'lash
    },


  },
})
