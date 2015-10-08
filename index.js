module.exports = {
    extends: 'eslint-config-airbnb',

    globals: {},

    rules: {
        strict: 0,
        'max-len': [2, 80, 4],
        indent: [2, 4],
        semi: [2, 'always'],
        'space-before-function-paren': [
            2, {
                anonymous: 'always',
                named: 'never'
            }
        ],
        'comma-dangle': [2, 'never'],
        'new-cap': 0,
        'id-length': 0
    }
};
