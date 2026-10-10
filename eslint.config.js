import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    // Files installed from the shadcn/Animate UI registry are kept verbatim so they can be
    // re-added or diffed against upstream. They export variants next to components and
    // pick the slot element during render, which these two rules flag.
    files: ['src/components/animate-ui/**/*.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
      'react-hooks/static-components': 'off',
    },
  },
]);
