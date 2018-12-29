# eslint-plugin-jsbox

An eslint plugin that provides environments and configs for [jsbox](https://docs.xteko.com/#/)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-jsbox`:

```
$ npm install eslint-plugin-jsbox --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-jsbox` globally.

## Usage

There are two ways to use this eslint plugin

1. **recommended** use the configs provided by this plugin
2. simply use environments provided by this plugin

### 1. use the configs

Your `.eslintrc` configuration can extend configs provided by this plugin.

```json
{
  "extends": ["plugin:jsbox/default"]
}
```

Then enjoy coding for jsbox !

### 2. simply use environments

First, add `jsbox` to the plugins section of your `.eslintrc` configuration file.

```json
{
  "plugins": ["jsbox"]
}
```

Then, add `jsbox/default` to the `env` section of your `.eslintrc` configuration file.

```json
{
  "env": {
    "jsbox/default": true
  }
}
```

Then enjoy coding for jsbox !
