import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig( {
  root: '.',
  server: {
    port: 8080
  },
  base: './',
})