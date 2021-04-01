module.exports = {
  collectCoverageFrom: [
    'src/**/*.ts?(x)',
    '!src/**/*.d.ts',
    '!src/**/index.ts?(x)',
    '!src/**/interface?(s).ts?(x)',
    '!src/**/*.stories.ts?(x)',
    '!src/**/__test?(s)__/*',
  ],
  coverageDirectory: './coverage/',
  coveragePathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  verbose: true,
};
