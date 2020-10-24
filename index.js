;((global, factory) => {
  (typeof exports === 'object' && typeof module !== 'undefined') 
    ? module.exports = factory()
    : (typeof define === 'function' && define.amd)
      ? define(factory)
      : global.base64url = factory();
})(globalThis || global || window || self || this, function base64url() {
  function toBase64url(base64) {
    return base64.replace(/[+/=]/g, (match) => {
      switch (match) {
        case '+': return '-';
        case '/': return '_';
        case '=': return '';
      }
    });
  }

  function toBase64(base64url) {
    return base64url.replace(/[-_]/g, (match) => {
      switch (match) {
        case '-': return '+';
        case '_': return '/';
      }
    }).padEnd(base64url.length + base64url.length * 3 % 4, '=');
  }

  return { toBase64url, toBase64 };
});
