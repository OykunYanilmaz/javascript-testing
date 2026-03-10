import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    ignores: ["dist/"],
    rules: {
      'space-before-function-parent': 'off',
      semi: ['error', 'always'],
    },
  },
]);
