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
yarn add -D typescript
yarn add -D husky 
yarn add -D @commitlint/cli @commitlint/config-conventional
yarn add -D prettier
yarn add -D @types/jest @types/node jest ts-jest ts-node
yarn add -D concurrently
yarn add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-jest
yarn add -D lint-staged 
```

### 3. Install husky and set hooks as executable

```shell
husky install
mv -R ./.tooling/.husky .husky
chmod a+x .husky/commit-msg
chmod a+x .husky/pre-commit
chmod a+x .husky/pre-push
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