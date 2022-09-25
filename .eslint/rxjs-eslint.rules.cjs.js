module.exports = {
    'rxjs/ban-observables': 'off',
    'rxjs/ban-operators': 'off',
    'rxjs/finnish': [
        'error',
        {
            functions: true,
            methods: true,
            names: {
                '^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$': false
            },
            parameters: true,
            properties: true,
            strict: false,
            types: {
                '^EventEmitter$': false
            },
            variables: true
        }
    ],
    'rxjs/no-async-subscribe': 'error',
    'rxjs/no-connectable': 'error',
    'rxjs/no-create': 'error',
    'rxjs/no-cyclic-action': 'error',
    'rxjs/no-exposed-subjects': 'error',
    'rxjs/no-ignored-error': 'off',
    'rxjs/no-ignored-notifier': 'error',
    'rxjs/no-ignored-observable': 'error',
    'rxjs/no-ignored-replay-buffer': 'error',
    'rxjs/no-ignored-subscribe': 'off',
    'rxjs/no-ignored-subscription': 'off',
    'rxjs/no-ignored-takewhile-value': 'error',
    'rxjs/no-implicit-any-catch': 'error',
    'rxjs/no-index': 'error',
    'rxjs/no-internal': 'error',
    'rxjs/no-nested-subscribe': 'error',
    'rxjs/no-redundant-notify': 'error',
    'rxjs/no-sharereplay': ['error', { allowConfig: true }],
    'rxjs/no-subclass': 'error',
    'rxjs/no-subject-unsubscribe': 'error',
    'rxjs/no-subject-value': 'error',
    'rxjs/no-subscribe-handlers': 'error',
    'rxjs/no-topromise': 'error',
    'rxjs/no-unbound-methods': 'error',
    'rxjs/no-unsafe-catch': 'error',
    'rxjs/no-unsafe-first': 'error',
    'rxjs/no-unsafe-subject-next': 'error',
    'rxjs/no-unsafe-switchmap': 'error',
    'rxjs/no-unsafe-takeuntil': 'error',
    'rxjs/prefer-observer': 'error',
    'rxjs/throw-error': 'error'
};