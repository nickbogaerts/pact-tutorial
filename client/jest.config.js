module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts', '**/*.test.tsx', '**/*.test.js'],
  clearMocks: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  setupFiles: []
};
