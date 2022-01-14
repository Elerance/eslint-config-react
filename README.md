# @elerance/eslint-config-react

This package provides elerance's base JS .eslintrc (with React + Typescript plugins) as an extensible shared config.

## Usage

### Installation:
#### Step 1. Authenticating with a personal access token
Authenticate using personal access token using:
1. Add `.npmrc` file with `@elerance:registry=https://npm.pkg.github.com/` to project directory,
2. Login using:
```shell
$ npm login --registry=https://npm.pkg.github.com

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

#### Step 2.1. Add dependency manually:

Add package to `dependencies` of your `package.json`:

```json5
{
  // ...
  "devDependencies": {
    // ...
    "@elerance/eslint-config-react": "^0.0.1", // use latest version
    // ...
  }
  // ...
}
```

Also run:

```shell
npm install
```

#### Step 2.2. Or install via NPM:

* Using version 7 or newer:

```sh
npm i @elerance/eslint-config-react@latest --save-dev
```

* Using version 5 or newer

```sh
npx install-peerdeps --dev @elerance/eslint-config-react
```

* Using version less than 5

- On linux or macOS:

```sh
(
  export PKG=@elerance/eslint-config-react;
  npm info "$PKG@latest" peerDependencies --json \
    | command sed 's/[\{\},]//g ; s/: /@/g' \
    | xargs npm install --save-dev "$PKG@latest"
)
```

It produces command like:
```sh
npm install --save-dev @elerance/eslint-config-react \
  eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# \
  eslint-plugin-react@^#.#.# eslint-plugin-react-hooks@^#.#.#
```

- On windows:

```sh
npm install -g install-peerdeps
install-peerdeps --dev @elerance/eslint-config-react
```

It produces command like:
```sh
npm install --save-dev @elerance/eslint-config-react \
  eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# \
  eslint-plugin-react@^#.#.# eslint-plugin-react-hooks@^#.#.#
```

#### Step 3. Add `"extends": "@elerance/eslint-config-react"` to your `.eslintrc`.

## Modules description

We export three ESLint configurations for your usage:

### 1. @elerance/eslint-config-react

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-jsx-a11y`.

### 2. @elerance/eslint-config-react/hooks

This entry point enables the linting rules for React hooks (requires v16.8+). To use, add `"extends": ["@elerance/eslint-config-react", "@elerance/eslint-config-react/hooks"]` to your `.eslintrc`

### 3. @elerance/eslint-config-react/whitespace

This entry point only errors on whitespace rules and sets all other rules to warnings. View the list of whitespace rules [here](https://github.com/elerance/@elerance/eslint-config-react/blob/master/packages/@elerance/eslint-config-react/whitespace.js).

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.

## Fork

This configuration is fork from `eslint-config-airbnb-base` and `eslint-config-airbnb`

See [Airbnb's overarching ESLint config](https://npmjs.com/eslint-config-airbnb), [Airbnb's JavaScript styleguide](https://github.com/airbnb/javascript), and the [ESlint config docs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.
