module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/strict',
    './rules/react',
    './rules/react-a11y',
    './rules/typescript',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {},
  overrides: [
    './overrides/typescript',
  ].map(require),
}
