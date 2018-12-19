module.exports = {
  parser: 'pluggable-babel-eslint',
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    plugins: ['typescript'],
  },
  rules: {
    'no-console': 'error',
  },
}
