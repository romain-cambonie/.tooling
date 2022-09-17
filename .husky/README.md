# Husky

[Documentation officielle](https://typicode.github.io/husky/#/)

## Pre-commit hook

Pre-commit hook execute `lint-staged` script

## Lint-staged

[Documentation](https://github.com/okonet/lint-staged)

The current configuration run the linter and prettier on 'staged' files (files where git has detected a modification)

## Pre-push hook

Le pre-push hook execute les commandes

- prettier:check => Vérifie que tous les fichiers ont un formatage valide

- eslint ./\*\*/src/ => Check lint on all files in sources directories

- test => Run all tests not needing dependencies
