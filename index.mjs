// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil2@v0.1.0-esm/index.mjs";function l(l,f){if(!e(f))throw new TypeError(n("1Wn2y,Ix",f));if(t(l))return function(t,e){var r;for(r=e.length-1;r>=0;r--)t.unshift(e[r]);return t}(l,f);if(r(l))return function(t,e){var r,s,n,l,f,m,d,h;if(l=t.length,s=(m=e.length)*t.BYTES_PER_ELEMENT,(n=t.byteOffset)<s)for(r=l*t.BYTES_PER_ELEMENT,n=(f=new i(o(r+s+n+1))).byteLength-r-s,d=new t.constructor(f,n,l+m),h=0;h<l;h++)d[h+m]=t[h];else n-=s,d=new t.constructor(t.buffer,n,l+m);for(h=0;h<m;h++)d[h]=e[h];return d}(l,f);if(null!==l&&"object"==typeof l&&"number"==typeof l.length&&s(l.length)&&l.length>=0)return function(t,e){var r,s,n;for(r=t.length,s=e.length,n=r-1;n>=0;n--)t[n+s]=t[n];for(n=0;n<s;n++)t[n]=e[n];return t.length=r+s,t}(l,f);throw new TypeError(n("1WnAi,Og",l))}export{l as default};
//# sourceMappingURL=index.mjs.map