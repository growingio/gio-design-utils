module.exports = {
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.{ts,tsx}',
    '!src/**/interface?(s).ts?(x)',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/__test?(s)__/*',
  ],
  coverageDirectory: './coverage/',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  verbose: true,
};
