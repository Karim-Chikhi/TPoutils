import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        node: true
      }
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      'no-console': 'warn',
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      // Ajoutez d'autres règles Airbnb si nécessaire
    },
    extends: ['airbnb-base']
  },
  
  // Configuration pour les fichiers JSON (plus simple)
  {
    files: ['**/*.json'],
    languageOptions: {
      parser: jsonParser // Nous allons définir ceci ci-dessous
    }
  }
]);

// Pour le support JSON, vous pouvez utiliser ceci :
import jsonParser from 'jsonc-eslint-parser';
