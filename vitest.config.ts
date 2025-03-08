import { defineConfig } from 'vitest/config'
export default defineConfig({
  test: {
    include: ['tests/**/*.spec.ts'],  // Aquí especificamos tus archivos de prueba .spec.ts
    coverage: {
      provider: 'v8',  // Usar el recolector de cobertura V8
      reporter: ['text', 'html'],  // Reportes en formato texto y HTML
      include: ['src/**/*.ts', 'src/*.ts'],  // Solo incluir archivos TS en src para la cobertura
      exclude: ['**/*.spec.ts'],  // Excluir los archivos .spec.ts de la cobertura
    },
  },
})