module.exports = {
    '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component', 'Layout', 'Page'] }],
    '@angular-eslint/component-max-inline-declarations': ['error', { template: 1, styles: 0, animations: 0 }],
    '@angular-eslint/component-selector': [
        "error",
        {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
        }
    ],
    '@angular-eslint/contextual-decorator': 'error',
    '@angular-eslint/contextual-lifecycle': 'error',
    '@angular-eslint/directive-class-suffix': 'error',
    '@angular-eslint/directive-selector': ['error', {
        "type": "attribute",
        "prefix": "app",
        "style": "camelCase"
    }],
    '@angular-eslint/no-attribute-decorator': 'error',
    '@angular-eslint/no-conflicting-lifecycle': 'error',
    '@angular-eslint/no-empty-lifecycle-method': 'error',
    '@angular-eslint/no-forward-ref': 'error',
    '@angular-eslint/no-host-metadata-property': 'error',
    '@angular-eslint/no-input-prefix': 'error',
    '@angular-eslint/no-input-rename': 'error',
    '@angular-eslint/no-inputs-metadata-property': 'error',
    '@angular-eslint/no-lifecycle-call': 'error',
    '@angular-eslint/no-output-native': 'error',
    '@angular-eslint/no-output-on-prefix': 'error',
    '@angular-eslint/no-output-rename': 'error',
    '@angular-eslint/no-outputs-metadata-property': 'error',
    '@angular-eslint/no-pipe-impure': 'error',
    '@angular-eslint/no-queries-metadata-property': 'error',
    '@angular-eslint/pipe-prefix': 'error',
    '@angular-eslint/prefer-on-push-component-change-detection': 'error',
    '@angular-eslint/prefer-output-readonly': 'error',
    '@angular-eslint/relative-url-prefix': 'error',
    '@angular-eslint/sort-ngmodule-metadata-arrays': 'error',
    '@angular-eslint/use-component-selector': 'off',
    '@angular-eslint/use-component-view-encapsulation': 'error',
    '@angular-eslint/use-injectable-provided-in': 'off',
    '@angular-eslint/use-lifecycle-interface': 'error',
    '@angular-eslint/use-pipe-transform-interface': 'error'
};