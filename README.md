# .Tooling

# About 

Dottooling is a ready to use setup to kickstart a typescript/node project with the right quality tools working out of the gate.

# Next 
Automate installation and distribute as a package ?

## Installation

### 1. Clone the repos in the repository root dir.

```shell
git clone git@github.com:romain-cambonie/.tooling.git
```

### 2. Install devDependencies
```shell 
yarn add -D @commitlint/cli @commitlint/config-conventional @types/jest @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser 
yarn add -D concurrently eslint eslint-config-prettier eslint-plugin-jest husky jest lint-staged prettier ts-jest ts-node typescript
```

### 3. Install husky and set hooks as executable

```shell
husky install
mv -R ./.tooling/.husky .husky
chmod a+x .husky/commit-msg
chmod a+x .husky/pre-commit
chmod a+x .husky/pre-push
```

### 4. Activate the 'validation' ci workflow

```shell
mv -R ./.tooling/.github/**/*.yml .github
```

### 5. Add the scripts in your package.json
```json
{
  "lint": "eslint --config=./.tooling/.eslint/.eslintrc.cjs  ./src/",
  "lint-staged": "lint-staged --config=./.tooling/.lintstaged/.lintstagedrc",
  "prettier": "prettier --config=./.tooling/.prettier/.prettierrc.cjs  --write  ./src/",
  "prettier:check": "prettier --config=./.tooling/.prettier/.prettierrc.cjs --check ./src/",
  "test": "jest --config=./.tooling/.jest/jest.config.ts"
}
```

###