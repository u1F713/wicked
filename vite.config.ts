import path from 'path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  root: 'src',
  publicDir: path.resolve(__dirname, 'public'),
  build: { target: 'esnext', outDir: path.resolve(__dirname, 'dist') },
  server: {
    port: 4444
  }
})
