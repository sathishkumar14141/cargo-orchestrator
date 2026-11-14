import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // @ts-expect-error The NodeNext declaration resolves to the module namespace instead of its callable default export.
    federation({
      name: 'orchestrator',
      remotes: {
        master_mfe: 'http://localhost:5001/assets/remoteEntry.js',
        operation_mfe: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
})
