# base64-to-base64url
Convert base64 to base64url and back. It works in browser or nodejs.

nodejs:
```js
const { toBase64url, toBase64 } = require('base64-to-base64url');
// you need to have base64 string to convert it to base64url
const source = 'EGpAltwwUC+4+5hhXsn7Vn57kdrMxQX2BtfC9Vjnuk0=';

const b64url = toBase64url(source);
// EGpAltwwUC-4-5hhXsn7Vn57kdrMxQX2BtfC9Vjnuk0

const b64 = toBase64(b64url);
// EGpAltwwUC+4+5hhXsn7Vn57kdrMxQX2BtfC9Vjnuk0=
```

browser:
```html
<script src="./node_modules/base64-to-base64url/index.js"></script>
<script>
  const { toBase64url, toBase64 } = window.base64url;
  // you need to have base64 string to convert it to base64url
  const source = 'EGpAltwwUC+4+5hhXsn7Vn57kdrMxQX2BtfC9Vjnuk0=';

  const b64url = toBase64url(source);
  // EGpAltwwUC-4-5hhXsn7Vn57kdrMxQX2BtfC9Vjnuk0

  const b64 = toBase64(b64url);
  // EGpAltwwUC+4+5hhXsn7Vn57kdrMxQX2BtfC9Vjnuk0=
</script>
```

How to get base64 string in nodejs
```js
const base64 = Buffer.from('Hello World', 'utf8').toString('base64');
// base64 = SGVsbG8gV29ybGQ=
```

How to get base64 string in browser
```js
const base64 = btoa('Hello World');
// base64 = SGVsbG8gV29ybGQ=
```
