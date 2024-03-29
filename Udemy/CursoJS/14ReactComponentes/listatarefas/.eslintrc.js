module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'import/no-duplicates': 0,
    'class-methods-use-this': 'warn',
    'react/no-unused-state': 0,
    'react/forbid-prop-types': 0,
  },
};
