const path = require('path')
module.exports = {
  rootDir: path.join(__dirname, '..'),
  runner: 'jest-runner-eslint',
  displayName: 'lint',
  testPathIgnorePatterns: ['node_modules', 'dist'],
  testMatch: ['**/*.+(js|ts|tsx)'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
}
