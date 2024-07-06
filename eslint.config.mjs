import js from '@eslint/js'
import globals from 'globals'
import prettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,cjs,mjs}'],
    ignores: ['node_modules/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'max-len': ['error', { code: 120, ignoreComments: true, ignoreStrings: true }],
      indent: ['error', 2],
      'no-undef': 'off',
      'prettier/prettier': 'error',
    },
  },
  prettier,
]
