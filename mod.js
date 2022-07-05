// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var u=t()?function(r){var t,u,i,f,a;if(null==r)return n.call(r);u=r[o],a=o,t=null!=(f=r)&&e.call(f,a);try{r[o]=void 0}catch(t){return n.call(r)}return i=n.call(r),t?r[o]=u:delete r[o],i}:function(r){return n.call(r)};var i=Array.isArray?Array.isArray:function(r){return"[object Array]"===u(r)},f=Math.floor;function a(r){return f(r)===r}var c="function"==typeof Object.defineProperty?Object.defineProperty:null;var y=Object.defineProperty,l=Object.prototype,v=l.toString,p=l.__defineGetter__,b=l.__defineSetter__,h=l.__lookupGetter__,s=l.__lookupSetter__;var w=function(){try{return c({},"x",{}),!0}catch(r){return!1}}()?y:function(r,t,n){var e,o,u,i;if("object"!=typeof r||null===r||"[object Array]"===v.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===v.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(h.call(r,t)||s.call(r,t)?(e=r.__proto__,r.__proto__=l,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),u="get"in n,i="set"in n,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&p&&p.call(r,t,n.get),i&&b&&b.call(r,t,n.set),r};function A(r,t,n){w(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function m(r){return"number"==typeof r}var g=Number,_=g.prototype.toString;var d=t();function E(r){return"object"==typeof r&&(r instanceof g||(d?function(r){try{return _.call(r),!0}catch(r){return!1}}(r):"[object Number]"===u(r)))}function j(r){return m(r)||E(r)}A(j,"isPrimitive",m),A(j,"isObject",E);var U=Number.POSITIVE_INFINITY,N=g.NEGATIVE_INFINITY;function O(r){return r<U&&r>N&&a(r)}function S(r){return m(r)&&O(r)}function T(r){return E(r)&&O(r.valueOf())}function I(r){return S(r)||T(r)}function F(r){return S(r)&&r>=0}function P(r){return T(r)&&r.valueOf()>=0}function B(r){return F(r)||P(r)}function L(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}A(I,"isPrimitive",S),A(I,"isObject",T),A(B,"isPrimitive",F),A(B,"isObject",P);var H="function"==typeof ArrayBuffer;var G="function"==typeof Float64Array;var M="function"==typeof Float64Array?Float64Array:null;var V,Y="function"==typeof Float64Array?Float64Array:void 0;V=function(){var r,t,n;if("function"!=typeof M)return!1;try{t=new M([1,3.14,-3.14,NaN]),n=t,r=(G&&n instanceof Float64Array||"[object Float64Array]"===u(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var R=V,W="function"==typeof ArrayBuffer?ArrayBuffer:null;var k,x="function"==typeof ArrayBuffer?ArrayBuffer:void 0;k=function(){var r,t,n,e;if("function"!=typeof W)return!1;try{n=new W(16),e=n,(r=(H&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===u(e))&&"function"==typeof W.isView)&&((t=new R(n))[0]=-3.14,t[1]=NaN,r=r&&W.isView(t)&&16===n.byteLength&&-3.14===t[0]&&t[1]!=t[1])}catch(t){r=!1}return r}()?x:function(){throw new Error("not implemented")};var C=k;function q(r){return r!=r}function z(r){return r===U||r===N}function D(r){return a(r/2)}function J(r){return D(r>0?r-1:r+1)}var K=Math.sqrt;function Q(r){return Math.abs(r)}var X="function"==typeof Uint32Array;var Z="function"==typeof Uint32Array?Uint32Array:null;var $,rr="function"==typeof Uint32Array?Uint32Array:void 0;$=function(){var r,t,n;if("function"!=typeof Z)return!1;try{t=new Z(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(X&&n instanceof Uint32Array||"[object Uint32Array]"===u(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var tr=$,nr="function"==typeof Uint8Array;var er="function"==typeof Uint8Array?Uint8Array:null;var or,ur="function"==typeof Uint8Array?Uint8Array:void 0;or=function(){var r,t,n;if("function"!=typeof er)return!1;try{t=new er(t=[1,3.14,-3.14,256,257]),n=t,r=(nr&&n instanceof Uint8Array||"[object Uint8Array]"===u(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var ir=or,fr="function"==typeof Uint16Array;var ar="function"==typeof Uint16Array?Uint16Array:null;var cr,yr="function"==typeof Uint16Array?Uint16Array:void 0;cr=function(){var r,t,n;if("function"!=typeof ar)return!1;try{t=new ar(t=[1,3.14,-3.14,65536,65537]),n=t,r=(fr&&n instanceof Uint16Array||"[object Uint16Array]"===u(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var lr,vr={uint16:cr,uint8:ir};(lr=new vr.uint16(1))[0]=4660;var pr,br,hr=52===new vr.uint8(lr.buffer)[0];!0===hr?(pr=1,br=0):(pr=0,br=1);var sr={HIGH:pr,LOW:br},wr=new R(1),Ar=new tr(wr.buffer),mr=sr.HIGH,gr=sr.LOW;function _r(r,t){return wr[0]=t,r[0]=Ar[mr],r[1]=Ar[gr],r}function dr(r,t){return 1===arguments.length?_r([0,0],r):_r(r,t)}var Er=!0===hr?0:1,jr=new R(1),Ur=new tr(jr.buffer);function Nr(r,t){return jr[0]=r,Ur[Er]=t>>>0,jr[0]}function Or(r){return 0|r}var Sr,Tr,Ir=!0===hr?1:0,Fr=new R(1),Pr=new tr(Fr.buffer);function Br(r){return Fr[0]=r,Pr[Ir]}!0===hr?(Sr=1,Tr=0):(Sr=0,Tr=1);var Lr={HIGH:Sr,LOW:Tr},Hr=new R(1),Gr=new tr(Hr.buffer),Mr=Lr.HIGH,Vr=Lr.LOW;function Yr(r,t){return Gr[Mr]=r,Gr[Vr]=t,Hr[0]}var Rr=[0,0];function Wr(r,t){var n,e;return dr(Rr,r),n=Rr[0],n&=2147483647,e=Br(t),Yr(n|=e&=2147483648,Rr[1])}var kr=!0===hr?1:0,xr=new R(1),Cr=new tr(xr.buffer);function qr(r,t){return xr[0]=r,Cr[kr]=t>>>0,xr[0]}var zr=[1,1.5],Dr=[0,.5849624872207642],Jr=[0,1.350039202129749e-8];function Kr(r,t){return q(t)||z(t)?(r[0]=t,r[1]=0,r):0!==t&&Q(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var Qr=[0,0],Xr=[0,0];function Zr(r,t){var n,e;return 0===t||0===r||q(r)||z(r)?r:(function(r,t){1===arguments.length?Kr([0,0],r):Kr(r,t)}(Qr,r),t+=Qr[1],t+=function(r){var t=Br(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Qr[0]),t<-1074?Wr(0,r):t>1023?r<0?N:U:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,dr(Xr,r),n=Xr[0],n&=2148532223,e*Yr(n|=t+1023<<20,Xr[1])))}var $r=1e300,rt=1e-300,tt=[0,0],nt=[0,0];function et(r,t){var n,e,o,u,i,f,c,y,l,v,p,b,h,s;if(q(r)||q(t))return NaN;if(dr(tt,t),i=tt[0],0===tt[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return K(r);if(-.5===t)return 1/K(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(z(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Q(r)<1==(t===U)?0:U}(r,t)}if(dr(tt,r),u=tt[0],0===tt[1]){if(0===u)return function(r,t){return t===N?U:t===U?0:t>0?J(t)?r:0:J(t)?Wr(U,r):U}(r,t);if(1===r)return 1;if(-1===r&&J(t))return-1;if(z(r))return r===N?et(-0,-t):t<0?0:U}if(r<0&&!1===a(t))return(r-r)/(r-r);if(o=Q(r),n=2147483647&u|0,e=2147483647&i|0,c=i>>>31|0,f=(f=u>>>31|0)&&J(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&Br(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===c?f*$r*$r:f*rt*rt;if(n>1072693248)return 0===c?f*$r*$r:f*rt*rt;p=function(r,t){var n,e,o,u,i,f;return n=(i=1.9259629911266175e-8*(o=t-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Nr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=n,r}(nt,o)}else p=function(r,t,n){var e,o,u,i,f,a,c,y,l,v,p,b,h,s,w,A,m,g,_,d,E;return g=0,n<1048576&&(g-=53,n=Br(t*=9007199254740992)),g+=(n>>20)-1023|0,n=1072693248|(_=1048575&n|0),_<=235662?d=0:_<767610?d=1:(d=0,g+=1,n-=1048576),i=Nr(o=(A=(t=qr(t,n))-(c=zr[d]))*(m=1/(t+c)),0),e=524288+(n>>1|536870912),a=qr(0,e+=d<<18),w=(u=o*o)*u*(0===(E=u)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),a=Nr(a=3+(u=i*i)+(w+=(f=m*(A-i*a-i*(t-(a-c))))*(i+o)),0),h=(p=-7.028461650952758e-9*(l=Nr(l=(A=i*a)+(m=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(m-(l-A))+Jr[d])-((b=Nr(b=(v=.9617967009544373*l)+p+(y=Dr[d])+(s=g),0))-s-y-v),r[0]=b,r[1]=h,r}(nt,o,n);if(v=(t-(y=Nr(t,0)))*p[0]+t*p[1],l=y*p[0],dr(tt,b=v+l),h=Or(tt[0]),s=Or(tt[1]),h>=1083179008){if(0!=(h-1083179008|s))return f*$r*$r;if(v+8008566259537294e-32>b-l)return f*$r*$r}else if((2147483647&h)>=1083231232){if(0!=(h-3230714880|s))return f*rt*rt;if(v<=b-l)return f*rt*rt}return b=function(r,t,n){var e,o,u,i,f,a,c,y,l,v,p;return v=((l=2147483647&r|0)>>20)-1023|0,y=0,l>1071644672&&(e=((y=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&y)>>20)-1023|0)))>>>0,y=(1048575&y|1048576)>>20-v>>>0,r<0&&(y=-y),t-=u=qr(0,e)),r=Or(r=Br(c=1-((c=(i=.6931471824645996*(u=Nr(u=n+t,0)))+(f=.6931471805599453*(n-(u-t))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((a=f-(c-i))+c*a)-c))),(r+=y<<20>>>0)>>20<=0?Zr(c,y):qr(c,r)}(h,l,v),f*b}var ot=Math.ceil;var ut=[0,0];function it(r){var t,n,e,o,u;if(q(r)||r<0)return NaN;if(dr(ut,r),u=0,(n=ut[0])<1048576){if(0==(2147483647&n|ut[1]))return N;u-=54,n=Br(r*=0x40000000000000)}return n>=2146435072?r+r:(u+=(n>>20)-1023|0,u+=(o=(n&=1048575)+614244&1048576|0)>>20|0,e=function(r){var t,n,e,o,u,i,f,a,c,y,l;return u=r-1,(1048575&2+(o=Br(r)))<3?0===u?0:u*u*(.3333333333333333*u-.5):(y=(o&=1048575)-398458|0,l=440401-o|0,n=(c=(f=(i=u/(2+u))*i)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),a=e+n,(y|=l)>0?i*((t=.5*u*u)+a)-t:i*(a-u))}(r=qr(r,n|1072693248^o)),1.6751713164886512e-10*((r-=1)+e)+1.4426950407214463*(r-(t=Nr(r,0))+e)+1.4426950407214463*t+u)}function ft(r,t){var n,e,o,u,i,a,c,y,l,v,p;if(u=r.length,e=(a=t.length)*r.BYTES_PER_ELEMENT,(o=r.byteOffset)<e)for(n=u*r.BYTES_PER_ELEMENT,o=(i=new C(q(l=n+e+o+1)||z(l)||0===l?l:(l<0?(l=-l,v=-1):v=1,-1074===(p=it(l))?l:(p=-1===v?f(p):ot(p))>1023?U:v*et(2,p)))).byteLength-n-e,c=new r.constructor(i,o,u+a),y=0;y<u;y++)c[y+a]=r[y];else o-=e,c=new r.constructor(r.buffer,o,u+a);for(y=0;y<a;y++)c[y]=t[y];return c}function at(r,t){if(!("object"==typeof(n=t)&&null!==n&&"number"==typeof n.length&&a(n.length)&&n.length>=0&&n.length<=9007199254740991))throw new TypeError(L("0lF3A",t));var n;if(i(r))return function(r,t){var n;for(n=t.length-1;n>=0;n--)r.unshift(t[n]);return r}(r,t);if(function(r){return null!==r&&"object"==typeof r&&F(r.length)&&r.length<=9007199254740991&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength}(r))return ft(r,t);if(null!==r&&"object"==typeof r&&"number"==typeof r.length&&I(r.length)&&r.length>=0)return function(r,t){var n,e,o;for(n=r.length,e=t.length,o=n-1;o>=0;o--)r[o+e]=r[o];for(o=0;o<e;o++)r[o]=t[o];return r.length=n+e,r}(r,t);throw new TypeError(L("invalid argument. First argument must be either an array, typed array, or an array-like object. Value: `%s`.",r))}export{at as default};
//# sourceMappingURL=mod.js.map
