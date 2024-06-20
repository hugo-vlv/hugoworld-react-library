import { defineConfig } from 'vite'
import { resolve, extname, relative } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    libInjectCss(),
    dts({ include: ['lib'] }),
  ],
  resolve: {
    alias: {
      '@atoms': resolve(__dirname, 'lib/components/atoms'),
      '@molecules': resolve(__dirname, 'lib/components/molecules'),
      '@organisms': resolve(__dirname, 'lib/components/organisms'),
      '@templates': resolve(__dirname, 'lib/components/templates'),
      '@assets': resolve(__dirname, 'lib/assets'),
      '@utils': resolve(__dirname, 'utils'),
      '@styles': resolve(__dirname, 'lib/styles'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob.sync('lib/**/*.{ts,tsx}', {
          ignore: ["lib/**/*.d.ts", "lib/**/*.stories.tsx", "lib/**/*.test.tsx"],
        }).map(file => [
          relative(
            'lib',
            file.slice(0, file.length - extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      }
    }
  },
})
