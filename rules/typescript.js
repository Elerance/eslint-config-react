// AUTHOR: MkSavin

module.exports = {
  plugins: [
    '@typescript-eslint',
  ],

  rules: {
    // disallow use of variables before they are defined
    '@typescript-eslint/no-use-before-define': 'error',

    // adds support for TypeScript's this parameters and global augmentation,
    //  and adds options for TypeScript features
    '@typescript-eslint/no-shadow': 'warn',

    // adds support for TypeScript features, such as types
    '@typescript-eslint/no-unused-vars': [ 'warn' ],

    // disallow use of variables before they are defined
    '@typescript-eslint/no-explicit-any': 'off',

    // Using the `any` type defeats the purpose of using TypeScript.
    // When `any` is used, all compiler type checks around that value are ignored
    '@typescript-eslint/no-empty-function': 'off',

    // Explicit types for function return values makes it clear to any
    //  calling code what type is returned.
    // This ensures that the return value is assigned to a variable of the correct type;
    //  or in the case where there is no return value,
    // that the calling code doesn't try to use the undefined value when it shouldn't
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Explicit types for function return values and arguments makes it clear to any
    //  calling code what is the module boundary's input and output
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  }
}
