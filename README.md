# v-maxlength

[![bundlephobia minified size](https://badgen.net/bundlephobia/min/v-hotkey)](https://bundlephobia.com/result?p=v-hotkey)
[![npm package version](https://badgen.net/npm/v/v-hotkey)](https://npm.im/v-hotkey)
[![github license](https://badgen.net/github/license/dafrok/v-hotkey)](https://github.com/dafrok/v-hotkey/blob/master/LICENSE)
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
