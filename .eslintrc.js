module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'react/function-component-definition': [2, { namedComponents: ['arrow-function', 'function-declaration'] }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'import/order': 'off',
    'no-use-before-define': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
};
