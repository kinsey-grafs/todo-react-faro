import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "https://mdn.github.io/todo-react/"
  base: '/todo-react/'
})
