# tgast-util-to-string

[![NPM Version](https://img.shields.io/npm/v/tgast-util-to-telegram-entity?style=for-the-badge&logo=npm&color=%23CB3837)](https://www.npmjs.com/package/tgast-util-to-string)
[![Static Badge](https://img.shields.io/badge/-Source_Code-%23181717?style=for-the-badge&logo=github)](https://github.com/unigramjs/tgast-util-to-string)
[![Static Badge](https://img.shields.io/badge/-%40tgastbot-%2326A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/tgastbot)

[tgast] utility to get the text content of a node.

## What is this?

This package is a tiny utility that gets the textual content of a node.

## When should I use this?

This utility is useful when you have a tgast node, say a [blockquote], and want to get the text inside it.

## Install

```sh
# deno
deno add npm:tgast-util-to-string

# bun
bun add tgast-util-to-string

# pnpm
pnpm add tgast-util-to-string

# yarn
yarn add tgast-util-to-string

# npm
npm install tgast-util-to-string
```

## Use

```ts
import type { Blockquote } from 'tgast'
import { getText } from 'tgast-util-to-string'

const node: Blockquote = {
  type: 'blockquote',
  children: [
    { type: 'text', value: 'Hello, ' },
    {
      type: 'bold',
      children: [{ type: 'text', value: 'bold' }],
    },
    { type: 'text', value: ' world!' },
  ],
}

console.log(getText(node)) // => "Hello, bold world!"
```

## API

This package exports the identifier `getText`. There is no default export.

### `getText(node)`

Get the plain-text value of a node.

#### Parameters

- `node` ([`Nodes`](https://github.com/unigramjs/tgast/blob/main/src/abstract.ts#L94)) — node to serialize.

#### Returns

Serialized node (`string`).

[tgast]: https://github.com/unigramjs/tgast
[blockquote]: https://github.com/unigramjs/tgast/wiki/Node:-Blockquote
