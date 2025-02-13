import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '5173-dethan3-typecraft-ix2t130hkh3.ws-us117.gitpod.io'
    ]
  }
})