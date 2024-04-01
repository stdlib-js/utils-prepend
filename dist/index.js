"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var h=v(function(C,g){
function x(r,e){var n;for(n=e.length-1;n>=0;n--)r.unshift(e[n]);return r}g.exports=x
});var E=v(function(F,d){
function A(r,e){var n,a,t;for(n=r.length,a=e.length,t=n-1;t>=0;t--)r[t+a]=r[t];for(t=0;t<a;t++)r[t]=e[t];return r.length=n+a,r}d.exports=A
});var b=v(function(I,q){
var L=require('@stdlib/array-buffer/dist'),_=require('@stdlib/math-base-special-ceil2/dist');function k(r,e){var n,a,t,y,s,p,i,f,u;if(s=r.length,i=e.length,a=i*r.BYTES_PER_ELEMENT,t=r.byteOffset,t<a)for(n=s*r.BYTES_PER_ELEMENT,y=n+a+t,p=new L(_(y+1)),t=p.byteLength-n-a,f=new r.constructor(p,t,s+i),u=0;u<s;u++)f[u+i]=r[u];else t-=a,f=new r.constructor(r.buffer,t,s+i);for(u=0;u<i;u++)f[u]=e[u];return f}q.exports=k
});var m=v(function(z,w){
var B=require('@stdlib/assert-is-array/dist'),S=require('@stdlib/assert-is-collection/dist'),M=require('@stdlib/assert-is-typed-array-like/dist'),N=require('@stdlib/assert-is-integer/dist'),T=require('@stdlib/error-tools-fmtprodmsg/dist'),O=h(),P=E(),R=b();function V(r,e){if(!S(e))throw new TypeError(T('1Wn2y',e));if(B(r))return O(r,e);if(M(r))return R(r,e);if(r!==null&&typeof r=="object"&&typeof r.length=="number"&&N(r.length)&&r.length>=0)return P(r,e);throw new TypeError(T('1WnAi',r))}w.exports=V
});var Y=m();module.exports=Y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
