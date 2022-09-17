module.exports = {
  rootDir: './../../src',
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: './.tsconfigs/tsconfig.test.json'
    }
  }
};
