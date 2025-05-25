import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.join(__dirname, 'sitelocale.test-key.pem')),
      cert: fs.readFileSync(path.join(__dirname, 'sitelocale.test.pem'))
    },
    host: 'sitelocale.test',
    port: 443,
    strictPort: true
  }
})