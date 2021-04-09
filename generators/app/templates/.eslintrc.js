module.exports = {
  env: {
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: `${__dirname}/tsconfig.eslint.json`,
  },
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
  },
};
