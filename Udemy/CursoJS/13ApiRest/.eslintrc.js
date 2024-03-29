module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'max-len': ['error', { code: 100 }],
    'import/first': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
  },
};
