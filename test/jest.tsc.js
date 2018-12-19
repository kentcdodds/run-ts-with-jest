const path = require('path')
module.exports = {
  rootDir: path.join(__dirname, '..'),
  runner: 'jest-runner-tsc',
  displayName: 'tsc',
  testPathIgnorePatterns: ['node_modules', 'dist'],
  testMatch: ['**/*.+(ts|tsx)'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
}
