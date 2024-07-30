module.exports = {
  root: true,
  plugins: ['import'],
  extends: [
    '@react-native',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {},
      typescript: {},
    },
    'import/parsers': {'@typescript-eslint/parser': ['.ts', '.tsx']},
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'import/no-unresolved': 'off',
    'import/export': 'off',
    'import/namespace': 'off',
  },
  '@typescript-eslint/quotes': [
    {
      allowTemplateLiterals: true,
    },
  ],
};
