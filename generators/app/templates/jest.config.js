module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleNameMapper: {
    '^@/': '<rootDir>/src/',
  },
  rootDir: '.',
  // setupFiles: [],
  // setupFilesAfterEnv: [],
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.test.ts',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  transformIgnorePatterns: [
    '/node_modules/',
    '\\.pnp\\.[^\\/]+$',
  ],

  // watchPathIgnorePatterns: [],
  // Whether to use watchman for file crawling
  // watchman: true,
};
