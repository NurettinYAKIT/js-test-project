module.exports = {
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      '^~/(.*)$': '<rootDir>/src/$1',
      '\\.(jpg|jpeg|png)$': '<rootDir>/test/__mocks__/fileMocks.js',
    },
    moduleFileExtensions: ['js','ts','json'],
    collectCoverage: true,
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: [
      '<rootDir>/src/**/*.(ts|js)',
    ],
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 80,
        lines: 70,
        statements: 70,
      },
    },
  };
  