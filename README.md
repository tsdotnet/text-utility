<a name="banner"><img src="https://cdn.jsdelivr.net/gh/tsdotnet/text-utility@master/assets/banner.svg" alt="@tsdotnet/text-utility: Text helpers, ready. Format, pad, trim, repeat."></a>

[![npm version](https://img.shields.io/npm/v/@tsdotnet/text-utility.svg?style=flat-square)](https://www.npmjs.com/package/@tsdotnet/text-utility)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/tsdotnet/text-utility/blob/master/LICENSE)

Small text helpers: fill placeholders in a template, pad values to a width, trim, repeat.

## Install

```sh
npm install @tsdotnet/text-utility
```

## Usage

```ts
import { supplant, padLeft } from '@tsdotnet/text-utility';

const name = 'Ada';
supplant('Hello, {name}', { name }); // "Hello, Ada"
padLeft(7, 3); // "007"
```

Also `format`, `repeat`, `trim` and more; everything is exported by name, or together as `textUtility`.

## Use it from

ESM (`import { supplant, padLeft } from '@tsdotnet/text-utility';`) or CommonJS (`const { supplant, padLeft } = require('@tsdotnet/text-utility');`).

<details><summary>In a browser, without a bundler</summary>

```html
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/text-utility@1/dist/umd/text-utility.min.js"></script>
<script>
  const { supplant, padLeft } = tsdotnet.textUtility;
</script>
```

</details>

## Docs

[tsdotnet.github.io/text-utility](https://tsdotnet.github.io/text-utility/)
