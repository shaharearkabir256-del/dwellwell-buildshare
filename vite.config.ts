import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// repo নাম অনুযায়ী base path সেট করো
export default defineConfig({
  plugins: [react()],
  base: '/dwellwell-buildshare/', // তোমার repo নাম
})
