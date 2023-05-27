import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === 'development'

  return {
    plugins: [react(), dts()],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'SpectreUI',
        fileName: 'spectre-ui',
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
    css: {
      modules: {
        generateScopedName: isDevelopment ? '[name]__[local]-[hash:64]' : '[hash:base64]',
      },
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "sass:color";
            @use 'src/assets/styles/abstracts/' as *;
          `,
        },
      },
    },
  }
})
