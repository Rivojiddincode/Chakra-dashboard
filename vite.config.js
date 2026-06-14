import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Bu yer React uchun to'g'rilandi

// https://vite.dev
export default defineConfig({
  plugins: [react()],
})

