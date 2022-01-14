module.exports = {
  files: [ '*.ts', '*.tsx' ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],

    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowArgumentsExplicitlyTypedAsAny: true,
      },
    ],

    '@typescript-eslint/no-empty-function': 'warn',

    '@typescript-eslint/no-shadow': 'error',
  }
}
