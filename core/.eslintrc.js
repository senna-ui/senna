module.exports = {
  extends: [
    'plugin:prettier/recommended',
    '@ionic/eslint-config/recommended',
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@stencil/recommended"
  ],
  plugins: ['@typescript-eslint', 'import', 'jsdoc'],
  ignorePatterns: ['**/node_modules/**', '**/*.html', 'www/**', 'dist/**'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'max-len': [
      'error',
      {
        code: 90,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'max-depth': ['error', 4],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'array-bracket-spacing': [
      'error',
      'never',
      {
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    eqeqeq: ['error', 'smart'],
    'no-extra-semi': 'error',
    'no-redeclare': 'error',
    'no-eval': 'error',
    'eol-last': 'error',
    'jsdoc/no-types': 'error',
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@senna-ui/**',
            group: 'external',
            position: 'after',
          },
        ],
        groups: [['external', 'builtin'], 'parent', 'sibling', 'index'],
        pathGroupsExcludedImportTypes: ['object'],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    // disable rules
    'arrow-parens': 'off',
    '@typescript-eslint/explicit-module-boundary-types': "off",
    "@stencil/strict-boolean-conditions": "off"
  },
};
