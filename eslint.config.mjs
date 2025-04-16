import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsonParser from 'jsonc-eslint-parser';

export default defineConfig([
  js.configs.recommended,
  {
    files: ['**/*.js'],
    plugins: {
      import: importPlugin,
    },
    rules: {
      'no-console': 'warn',
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'import/no-unresolved': 'error',
      'import/extensions': ['error', 'ignorePackages'],
      'import/order': 'error'
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        node: true
      }
    }
  },
  {
    files: ['**/*.json'],
    languageOptions: {
      parser: jsonParser
    }
  }
]);