import { resolve } from 'path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  root: 'src',
  publicDir: resolve(__dirname, 'public'),
  build: { target: 'esnext', outDir: resolve(__dirname, 'dist') },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/view/components'),
      '@styles': resolve(__dirname, 'src/views/styles')
    }
  },
  server: {
    port: 4444
  }
})
