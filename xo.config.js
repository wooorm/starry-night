import globals from 'globals'

/** @type {import('xo').FlatXoConfig} */
const xoConfig = [
  {
    ignores: ['gems/', 'lang/'],
    name: 'default',
    prettier: 'compat',
    rules: {
      'jsdoc/check-indentation': 'off',
      'jsdoc/check-line-alignment': 'off',
      'jsdoc/require-asterisk-prefix': 'off',
      'jsdoc/require-returns-type': 'off',
      'jsdoc/require-yields': 'off',
      'max-depth': 'off',
      'no-bitwise': 'off',
      'no-shadow': 'off',
      'no-template-curly-in-string': 'off',
      'require-unicode-regexp': 'off',
      'unicorn/consistent-boolean-name': 'off',
      'unicorn/no-array-sort': 'off',
      'unicorn/no-break-in-nested-loop': 'off',
      'unicorn/prefer-at': 'off',
      'unicorn/prefer-iterator-to-array': 'off',
      'unicorn/prefer-string-raw': 'off',
      'unicorn/prefer-string-replace-all': 'off',
      'unicorn/require-array-sort-compare': 'off',
      'unicorn/require-module-specifiers': 'off'
    },
    space: true
  },
  {
    languageOptions: {globals: globals.browser},
    files: ['lib/get-oniguruma.default.js']
  },
  {
    files: ['lang/*.js'],
    rules: {
      camelcase: 'off',
      'unicorn/no-thenable': 'off',
      'unicorn/prefer-https': 'off'
    }
  },
  {
    files: ['lang/*.js', 'script/info.js'],
    rules: {
      'max-lines': 'off',
      'unicorn/prefer-unicode-code-point-escapes': 'off'
    }
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'generic'
        }
      ],
      '@typescript-eslint/no-restricted-types': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface']
    }
  },
  {
    files: ['script/**/*.js'],
    rules: {
      'no-await-in-loop': 'off',
      'unicorn/prefer-top-level-await': 'off'
    }
  }
]

export default xoConfig
