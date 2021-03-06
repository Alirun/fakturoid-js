module.exports = {
  'parser': '@typescript-eslint/parser',
  'env': {
    'node': true,
    'es2020': true,
    'mocha': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 2018,
  },
  'rules': {
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'brace-style': [
      'error'
    ],
    'object-shorthand': [
      'error'
    ],
    'eol-last': [
      'error',
      'always'
    ],
    'spaced-comment': [
      'error',
      'always'
    ],
    'keyword-spacing': [
      'error'
    ],
    'no-multi-spaces': [
      'error'
    ],
    'block-spacing': [
      'error'
    ],
    'comma-spacing': [
      'error'
    ],
    'arrow-spacing': [
      'error'
    ],
    'rest-spread-spacing': [
      'error',
      'never'
    ],
    'space-before-blocks': [
      'error'
    ],
    'key-spacing': [
      'error'
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'error'
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'memberLike',
        'modifiers': ['private', 'protected'],
        'format': ['camelCase'],
        'leadingUnderscore': 'require'
      },
      {
        'selector': 'interface',
        'format': ['PascalCase'],
        'custom': {
          'regex': '^I[A-Z]',
          'match': true
        }
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'none',
          'requireLast': false
        },
        'singleline': {
          'delimiter': 'semi',
          'requireLast': false
        }
      }
    ],
    '@typescript-eslint/no-empty-function': [
      'off'
    ]
  }
}
