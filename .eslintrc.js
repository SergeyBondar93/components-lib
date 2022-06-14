module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
      node: true,
      es6: true,
      es2017: true,
  },
  extends: ['plugin:prettier/recommended'],
  plugins: [
      'react',
      'react-hooks',
      '@typescript-eslint/eslint-plugin',
      'prettier',
      'import',
  ],
  settings: {
      'import/resolver': {
          node: {
              extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
      },
  },
  rules: {
      'no-console': [
          'error',
          {
              allow: ['error', 'warn', 'info'],
          },
      ],
      'capitalized-comments': ['off'],
      'prettier/prettier': ['error'],
      'import/no-extraneous-dependencies': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-array-index-key': 'warn',
      // 'import/no-unresolved': [
      //     'error',
      //     {
      //         ignore: [
      //             '@/pages/',
      //             '@/components/',
      //             '@/libs/',
      //             '@/models/',
      //             '@/store',
      //             '@/persistedState/',
      //             '@/styles/',
      //             '@/assets/',
      //         ],
      //     },
      // ],
      'import/order': [
          'error',
          {
              'newlines-between': 'always',
              groups: [
                  'builtin',
                  'external',
                  'internal',
                  'parent',
                  'sibling',
                  'index',
              ],
              pathGroupsExcludedImportTypes: ['builtin'],
              pathGroups: [
                  {
                      pattern: '@che/**',
                      group: 'internal',
                  },
              ],
          },
      ],
      'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: 'if', next: '*' },
          { blankLine: 'always', prev: '*', next: 'if' },
          { blankLine: 'always', prev: '*', next: 'return' },
      ],
      'react/jsx-indent': ['error', 4, { indentLogicalExpressions: true }],
      'no-underscore-dangle': 0,
      'no-unexpected-multiline': 'error',
      '@typescript-eslint/no-use-before-define': ['warn'],
      '@typescript-eslint/unbound-method': ['warn'],
      '@typescript-eslint/prefer-regexp-exec': 'warn',
      // Prettier conflicts
      'import/newline-after-import': 0,
      'react/jsx-indent': 0,
  },
  overrides: [
      // to allow methods overload in typescript
      {
          files: ['*.ts', '*.tsx'],
          parserOptions: {
              project: ['./tsconfig.json'],
              tsconfigRootDir: __dirname,
          },
      },
  ],
};
