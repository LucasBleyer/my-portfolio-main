import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio-dev-lucas-bleyer",
  assetsInclude: ['**/*.jpeg', '**/*.png', '**/*.jpg'],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})


