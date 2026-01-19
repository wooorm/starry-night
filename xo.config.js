import globals from 'globals'

/** @type {import('xo').FlatXoConfig} */
const xoConfig = [
  {
    ignores: ['gems/', 'lang/'],
    name: 'default',
    prettier: true,
    rules: {
      'max-depth': 'off',
      'no-bitwise': 'off',
      'no-template-curly-in-string': 'off',
      'unicorn/prefer-at': 'off',
      'unicorn/prefer-string-raw': 'off',
      'unicorn/prefer-string-replace-all': 'off'
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
      'unicorn/no-thenable': 'off'
    }
  },
  {
    files: ['lang/*.js', 'script/info.js'],
    rules: {
      'max-lines': 'off'
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
