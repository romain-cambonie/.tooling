// Lint the files included in each typescript project with common rules
const projects = [
  './../../.tsconfigs/tsconfig.json',
];

// Lint the files included in each typescript project with common rules and jest specific rules
const projectsTests = [
  './../../.tsconfigs/tsconfig.test.json',
];

const pluginsWithAngular = ['@typescript-eslint', '@angular-eslint', 'rxjs', 'rxjs-angular'];

// Lint project using its tsconfig.json.
const lintProjects = () => {
  return [
    {
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
      ],
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: projects,
        ecmaVersion: 2020,
        sourceType: 'module'
      },
      plugins: pluginsWithAngular,
      rules: {
        ...require('./eslint.rules.cjs'),
        ...require('./typescript-eslint.rules.cjs'),
        ...require('./angular-eslint.rules'),
        ...require('./rxjs-eslint.rules'),
        ...require('./rxjs-angular-eslint.rules')
      },
    },
  ];
};

// Attention: Declaration order has importance as rules apply in cascade.
const lintProjectsWithoutTests = () => {
  return [...lintProjects()];
};

// tests must be included in their tsconfig project.
const lintTests = () => {
  return [
    {
      env: {
        'jest/globals': true,
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: projectsTests,
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      files: ['**/*.test.ts'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      plugins: ['jest', '@typescript-eslint'],
      rules: {
        ...require('./eslint.rules.cjs'),
        ...require('./eslint-test.rules.cjs'),
        ...require('./typescript-eslint.rules.cjs'),
        ...require('./typescript-eslint-test.rules.cjs'),
        ...require('./jest-eslint.rules.cjs'),
      },
    },
  ];
};

const lintAngularTemplates = () => {
  return [
    {
      files: ['*.html'],
      parser: '@angular-eslint/template-parser',
      plugins: ['@angular-eslint/template'],
      rules: {
        ...require('./angular-template-eslint.rules')
      }
    },
  ];
};

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [...lintProjectsWithoutTests(), ...lintTests(), ...lintAngularTemplates()],
};
