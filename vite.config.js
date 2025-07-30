import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// GitHub Pages এ repo path সেট করা
export default defineConfig({
  plugins: [react()],
  base: '/dwellwell-buildshare/', // তোমার repo নাম
})
