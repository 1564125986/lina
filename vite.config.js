import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Base public path - Change this to match your GitHub repository name
  // For example, if your repo is username.github.io, use '/'
  // If your repo is username/repo-name, use '/repo-name/'
  base: './',

  // Configure server
  server: {
    host: '0.0.0.0',
    port: 3000,
  },

  // Configure build
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        group: resolve(__dirname, 'group.html'),
        publications: resolve(__dirname, 'Publications.htm'),
        services: resolve(__dirname, 'Services.htm'),
        experience: resolve(__dirname, 'experience.html'),
      },
    },
  },

  // Serve static files in development
  publicDir: './public',

  // Configure assets
  assetsInclude: ['**/*.md', '**/*.yml', '**/*.htm'],
});
