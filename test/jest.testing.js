const path = require('path')

module.exports = {
  displayName: 'test',
  rootDir: path.join(__dirname, '..'),
  // look for ts files
  testMatch: ['**/__tests__/**/*.+(js|ts|tsx)'],
  // tells it that ts/tsx files are valid modules
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
  // explicitly transform ts/tsx with babel
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
}
