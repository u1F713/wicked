import { resolve } from 'path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths()],
  root: 'src',
  publicDir: resolve(__dirname, 'public'),
  build: { target: 'esnext', outDir: resolve(__dirname, 'dist') },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@styles': resolve(__dirname, 'src/views/styles')
    }
  },
  server: {
    port: 4444
  }
})
