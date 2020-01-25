# v-maxlength

[![bundlephobia minified size](https://badgen.net/bundlephobia/min/v-maxlength)](https://bundlephobia.com/result?p=v-maxlength)
[![npm package version](https://badgen.net/npm/v/v-maxlength)](https://npm.im/v-maxlength)
[![github license](https://badgen.net/github/license/n2name/v-maxlength)](https://github.com/n2name/v-maxlength/blob/master/LICENSE)
[![js standard style](https://badgen.net/badge/code%20style/standard/pink)](https://standardjs.com)

Vue 2.x directive for limiting textbox and textarea maxlength.

## Install

```bash
$ npm i --save v-maxlength
```

## Usage

```javascript
import Vue from 'vue'
const maxLength = require('v-maxlength').default;

Vue.use(maxLength)
```

```vue
<template>
  <textarea v-maxlength="50"></textarea>
  <input v-maxlength="50" />
</template>
```

## Event Handler

- input
