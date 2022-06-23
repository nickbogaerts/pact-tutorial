module.exports = {
  extends: [
    'airbnb-typescript/base',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style'
  ],
  env: {
    jest: true
  },
  root: true,
  rules: {
    'import/no-unresolved': [0],
    'import/no-extraneous-dependencies': [0],
    'implicit-arrow-linebreak': [0],
    'max-classes-per-file': [0],
    'no-new': [0],
    'import/no-named-as-default': 0
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: ['jest', '@typescript-eslint'],
  overrides: [],
  ignorePatterns: ['cdk.out/']
};
