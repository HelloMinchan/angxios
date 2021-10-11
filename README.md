# angxios

[![npm version](https://img.shields.io/npm/v/angxios.svg?style=flat-square)](https://www.npmjs.org/package/angxios)
[![install size](https://packagephobia.now.sh/badge?p=angxios)](https://packagephobia.now.sh/result?p=angxios)
[![npm downloads](https://img.shields.io/npm/dm/angxios.svg?style=flat-square)](http://npm-stat.com/charts.html?package=angxios)

Promise based HTTP client for the browser and node.js is... [axios](https://www.npmjs.org/package/axios) 😂

**angxios** is Wrapper Module for **retry** of axios (In Korean, It's "앙시오스"..)

> purpose: simple, identicality, reusable, compatible

## Installing

Using npm:

```bash
npm install angxios
```

or

Using yarn:

```bash
yarn add angxios
```

## Usage

### Note: angxios supports CommonJS and ES(TS) both.

```js
// CommonJS module require
const angxios = require("angxios");

// ES(TS) module import
import angxios from "angxios";
```

### Retry Setting

It's very simple, just set count for retry.

```js
// set request retry count
angxios.setRetryCount(1);
```

### Default Setting

```js
// set global base URL
angxios.setBaseURL("exampleURL");

// set global defaults timeout(ms)
angxios.setTimeout(1000); // this means 1sec
```

### Request Method Aliases

Basically, It's the same as that of axios.

However, except for the example below, the wrapper method is not supported.

##### angxios.get(url, config?)

##### angxios.delete(url, config?)

##### angxios.options(url, config?)

##### angxios.post(url, data?, config?)

##### angxios.put(url, data?, config?)

##### angxios.patch(url, data?, config?)

```js
// Performing a GET request example
angxios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err.message));
```
