// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil2@esm/index.mjs";function l(l,m){if(!e(m))throw new TypeError(n("0lF3A",m));if(t(l))return function(t,e){var r;for(r=e.length-1;r>=0;r--)t.unshift(e[r]);return t}(l,m);if(r(l))return function(t,e){var r,s,n,l,m,d,f,a;if(l=t.length,s=(d=e.length)*t.BYTES_PER_ELEMENT,(n=t.byteOffset)<s)for(r=l*t.BYTES_PER_ELEMENT,n=(m=new i(o(r+s+n+1))).byteLength-r-s,f=new t.constructor(m,n,l+d),a=0;a<l;a++)f[a+d]=t[a];else n-=s,f=new t.constructor(t.buffer,n,l+d);for(a=0;a<d;a++)f[a]=e[a];return f}(l,m);if(null!==l&&"object"==typeof l&&"number"==typeof l.length&&s(l.length)&&l.length>=0)return function(t,e){var r,s,n;for(r=t.length,s=e.length,n=r-1;n>=0;n--)t[n+s]=t[n];for(n=0;n<s;n++)t[n]=e[n];return t.length=r+s,t}(l,m);throw new TypeError(n("invalid argument. First argument must be either an array, typed array, or an array-like object. Value: `%s`.",l))}export{l as default};
//# sourceMappingURL=index.mjs.map
