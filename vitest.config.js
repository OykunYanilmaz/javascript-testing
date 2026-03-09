import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      include: ['**/*.js'],   // bütün js dosyalarını coverage'a dahil eder
      exclude: ['**/*.test.js', 'node_modules/**']
    }
  }
})