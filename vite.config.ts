import react from '@vitejs/plugin-react'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  root: 'src/client',
  publicDir: '../../public',
  server: {
    port: 5757,
    proxy: {
      '/api': 'http://127.0.0.1:5858',
    },
  },
  optimizeDeps: {
    exclude: ['@tldraw/assets'],
  },
  build: {
    outDir: '../../dist/client',
    emptyOutDir: true,
  },
  test: {
    // Nested git worktrees are full second checkouts; never collect their copy of the suite.
    exclude: [...configDefaults.exclude, '.worktrees/**', '.claude/worktrees/**'],
  },
})
