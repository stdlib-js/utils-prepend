// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return r&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString,e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"",u=n()?function(r){var n,u,i,f,a;if(null==r)return t.call(r);u=r[o],a=o,n=null!=(f=r)&&e.call(f,a);try{r[o]=void 0}catch(n){return t.call(r)}return i=t.call(r),n?r[o]=u:delete r[o],i}:function(r){return t.call(r)},i=Array.isArray?Array.isArray:function(r){return"[object Array]"===u(r)},f=Math.floor;function a(r){return f(r)===r}var c=9007199254740991,y="function"==typeof Object.defineProperty?Object.defineProperty:null,l=Object.defineProperty,p=Object.prototype,b=p.toString,s=p.__defineGetter__,v=p.__defineSetter__,h=p.__lookupGetter__,w=p.__lookupSetter__,g=function(){try{return y({},"x",{}),!0}catch(r){return!1}}()?l:function(r,n,t){var e,o,u,i;if("object"!=typeof r||null===r||"[object Array]"===b.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===b.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(h.call(r,n)||w.call(r,n)?(e=r.__proto__,r.__proto__=p,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,i="set"in t,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&s&&s.call(r,n,t.get),i&&v&&v.call(r,n,t.set),r};function A(r,n,t){g(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function m(r){return"number"==typeof r}var d=Number,_=d.prototype.toString,E=n();function j(r){return"object"==typeof r&&(r instanceof d||(E?function(r){try{return _.call(r),!0}catch(r){return!1}}(r):"[object Number]"===u(r)))}function U(r){return m(r)||j(r)}A(U,"isPrimitive",m),A(U,"isObject",j);var O=Number.POSITIVE_INFINITY,N=d.NEGATIVE_INFINITY;function T(r){return r<O&&r>N&&a(r)}function S(r){return m(r)&&T(r)}function I(r){return j(r)&&T(r.valueOf())}function P(r){return S(r)||I(r)}function B(r){return S(r)&&r>=0}function F(r){return I(r)&&r.valueOf()>=0}function L(r){return B(r)||F(r)}function H(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}A(P,"isPrimitive",S),A(P,"isObject",I),A(L,"isPrimitive",B),A(L,"isObject",F);var G,M="function"==typeof ArrayBuffer,V="function"==typeof Float64Array,W="function"==typeof Float64Array?Float64Array:null,x="function"==typeof Float64Array?Float64Array:void 0;G=function(){var r,n,t;if("function"!=typeof W)return!1;try{n=new W([1,3.14,-3.14,NaN]),t=n,r=(V&&t instanceof Float64Array||"[object Float64Array]"===u(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var Y,R=G,k="function"==typeof ArrayBuffer?ArrayBuffer:null,C="function"==typeof ArrayBuffer?ArrayBuffer:void 0;Y=function(){var r,n,t,e;if("function"!=typeof k)return!1;try{t=new k(16),e=t,(r=(M&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===u(e))&&"function"==typeof k.isView)&&((n=new R(t))[0]=-3.14,n[1]=NaN,r=r&&k.isView(n)&&16===t.byteLength&&-3.14===n[0]&&n[1]!=n[1])}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var q=Y;function z(r){return r!=r}function D(r){return r===O||r===N}function J(r){return a(r/2)}function K(r){return J(r>0?r-1:r+1)}var Q=Math.sqrt;function X(r){return Math.abs(r)}var Z,$="function"==typeof Uint32Array,rr="function"==typeof Uint32Array?Uint32Array:null,nr="function"==typeof Uint32Array?Uint32Array:void 0;Z=function(){var r,n,t;if("function"!=typeof rr)return!1;try{n=new rr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=($&&t instanceof Uint32Array||"[object Uint32Array]"===u(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var tr,er=Z,or="function"==typeof Uint8Array,ur="function"==typeof Uint8Array?Uint8Array:null,ir="function"==typeof Uint8Array?Uint8Array:void 0;tr=function(){var r,n,t;if("function"!=typeof ur)return!1;try{n=new ur(n=[1,3.14,-3.14,256,257]),t=n,r=(or&&t instanceof Uint8Array||"[object Uint8Array]"===u(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var fr,ar=tr,cr="function"==typeof Uint16Array,yr="function"==typeof Uint16Array?Uint16Array:null,lr="function"==typeof Uint16Array?Uint16Array:void 0;fr=function(){var r,n,t;if("function"!=typeof yr)return!1;try{n=new yr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(cr&&t instanceof Uint16Array||"[object Uint16Array]"===u(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,br={uint16:fr,uint8:ar};(pr=new br.uint16(1))[0]=4660;var sr,vr,hr=52===new br.uint8(pr.buffer)[0];!0===hr?(sr=1,vr=0):(sr=0,vr=1);var wr={HIGH:sr,LOW:vr},gr=new R(1),Ar=new er(gr.buffer),mr=wr.HIGH,dr=wr.LOW;function _r(r,n,t,e){return gr[0]=r,n[e]=Ar[mr],n[e+t]=Ar[dr],n}function Er(r){return _r(r,[0,0],1,0)}A(Er,"assign",_r);var jr=!0===hr?0:1,Ur=new R(1),Or=new er(Ur.buffer);function Nr(r,n){return Ur[0]=r,Or[jr]=n>>>0,Ur[0]}function Tr(r){return 0|r}var Sr,Ir,Pr=2147483647,Br=!0===hr?1:0,Fr=new R(1),Lr=new er(Fr.buffer);function Hr(r){return Fr[0]=r,Lr[Br]}!0===hr?(Sr=1,Ir=0):(Sr=0,Ir=1);var Gr={HIGH:Sr,LOW:Ir},Mr=new R(1),Vr=new er(Mr.buffer),Wr=Gr.HIGH,xr=Gr.LOW;function Yr(r,n){return Vr[Wr]=r,Vr[xr]=n,Mr[0]}var Rr=[0,0];function kr(r,n){var t,e;return Er.assign(r,Rr,1,0),t=Rr[0],t&=Pr,e=Hr(n),Yr(t|=e&=2147483648,Rr[1])}var Cr=!0===hr?1:0,qr=new R(1),zr=new er(qr.buffer);function Dr(r,n){return qr[0]=r,zr[Cr]=n>>>0,qr[0]}var Jr=1023,Kr=1048576,Qr=[1,1.5],Xr=[0,.5849624872207642],Zr=[0,1.350039202129749e-8];function $r(r,n,t,e){return z(r)||D(r)?(n[e]=r,n[e+t]=0,n):0!==r&&X(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}A((function(r){return $r(r,[0,0],1,0)}),"assign",$r);var rn=[0,0],nn=[0,0];function tn(r,n){var t,e;return 0===n||0===r||z(r)||D(r)?r:($r(r,rn,1,0),n+=rn[1],n+=function(r){var n=Hr(r);return(n=(2146435072&n)>>>20)-Jr|0}(r=rn[0]),n<-1074?kr(0,r):n>1023?r<0?N:O:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Er.assign(r,nn,1,0),t=nn[0],t&=2148532223,e*Yr(t|=n+Jr<<20,nn[1])))}var en=1048575,on=1048576,un=1083179008,fn=1e300,an=1e-300,cn=[0,0],yn=[0,0];function ln(r,n){var t,e,o,u,i,f,c,y,l,p,b,s,v,h;if(z(r)||z(n))return NaN;if(Er.assign(n,cn,1,0),i=cn[0],0===cn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Q(r);if(-.5===n)return 1/Q(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(D(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:X(r)<1==(n===O)?0:O}(r,n)}if(Er.assign(r,cn,1,0),u=cn[0],0===cn[1]){if(0===u)return function(r,n){return n===N?O:n===O?0:n>0?K(n)?r:0:K(n)?kr(O,r):O}(r,n);if(1===r)return 1;if(-1===r&&K(n))return-1;if(D(r))return r===N?ln(-0,-n):n<0?0:O}if(r<0&&!1===a(n))return(r-r)/(r-r);if(o=X(r),t=u&Pr|0,e=i&Pr|0,c=i>>>31|0,f=(f=u>>>31|0)&&K(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(Hr(r)&Pr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===c?f*fn*fn:f*an*an;if(t>1072693248)return 0===c?f*fn*fn:f*an*an;b=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Nr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(yn,o)}else b=function(r,n,t){var e,o,u,i,f,a,c,y,l,p,b,s,v,h,w,g,A,m,d,_,E;return m=0,t<Kr&&(m-=53,t=Hr(n*=9007199254740992)),m+=(t>>20)-Jr|0,t=1072693248|(d=1048575&t|0),d<=235662?_=0:d<767610?_=1:(_=0,m+=1,t-=Kr),i=Nr(o=(g=(n=Dr(n,t))-(c=Qr[_]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),a=Dr(0,e+=_<<18),w=(u=o*o)*u*(0===(E=u)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),a=Nr(a=3+(u=i*i)+(w+=(f=A*(g-i*a-i*(n-(a-c))))*(i+o)),0),v=(b=-7.028461650952758e-9*(l=Nr(l=(g=i*a)+(A=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(A-(l-g))+Zr[_])-((s=Nr(s=(p=.9617967009544373*l)+b+(y=Xr[_])+(h=m),0))-h-y-p),r[0]=s,r[1]=v,r}(yn,o,t);if(s=(p=(n-(y=Nr(n,0)))*b[0]+n*b[1])+(l=y*b[0]),Er.assign(s,cn,1,0),v=Tr(cn[0]),h=Tr(cn[1]),v>=un){if(0!=(v-un|h))return f*fn*fn;if(p+8008566259537294e-32>s-l)return f*fn*fn}else if((v&Pr)>=1083231232){if(0!=(v-3230714880|h))return f*an*an;if(p<=s-l)return f*an*an}return s=function(r,n,t){var e,o,u,i,f,a,c,y,l,p;return l=((y=r&Pr|0)>>20)-Jr|0,c=0,y>1071644672&&(o=Dr(0,((c=r+(on>>l+1)>>>0)&~(en>>(l=((c&Pr)>>20)-Jr|0)))>>>0),c=(c&en|on)>>20-l>>>0,r<0&&(c=-c),n-=o),r=Tr(r=Hr(a=1-((a=(u=.6931471824645996*(o=Nr(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?tn(a,c):Dr(a,r)}(v,l,p),f*s}var pn=Math.ceil,bn=1048575,sn=1.4426950407214463,vn=[0,0];function hn(r){var n,t,e,o,u;if(z(r)||r<0)return NaN;if(Er.assign(r,vn,1,0),u=0,(t=vn[0])<1048576){if(0==(t&Pr|vn[1]))return N;u-=54,t=Hr(r*=0x40000000000000)}return t>=2146435072?r+r:(u+=(t>>20)-Jr|0,u+=(o=614244+(t&=en)&1048576|0)>>20|0,e=function(r){var n,t,e,o,u,i,f,a,c,y,l;return o=Hr(r),u=r-1,(bn&2+o)<3?0===u?0:u*u*(.3333333333333333*u-.5):(y=(o&=bn)-398458|0,l=440401-o|0,t=(c=(f=(i=u/(2+u))*i)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),a=e+t,(y|=l)>0?i*((n=.5*u*u)+a)-n:i*(a-u))}(r=Dr(r,t|1072693248^o)),1.6751713164886512e-10*((r-=1)+e)+(r-(n=Nr(r,0))+e)*sn+n*sn+u)}function wn(r,n){var t,e,o,u,i,a,c,y,l,p,b;if(u=r.length,e=(a=n.length)*r.BYTES_PER_ELEMENT,(o=r.byteOffset)<e)for(t=u*r.BYTES_PER_ELEMENT,o=(i=new q(z(l=t+e+o+1)||D(l)||0===l?l:(l<0?(l=-l,p=-1):p=1,-1074===(b=hn(l))?l:(b=-1===p?f(b):pn(b))>1023?O:p*ln(2,b)))).byteLength-t-e,c=new r.constructor(i,o,u+a),y=0;y<u;y++)c[y+a]=r[y];else o-=e,c=new r.constructor(r.buffer,o,u+a);for(y=0;y<a;y++)c[y]=n[y];return c}return function(r,n){if(!("object"==typeof(t=n)&&null!==t&&"number"==typeof t.length&&a(t.length)&&t.length>=0&&t.length<=c))throw new TypeError(H("1Wn2y,Ix",n));var t;if(i(r))return function(r,n){var t;for(t=n.length-1;t>=0;t--)r.unshift(n[t]);return r}(r,n);if(function(r){return null!==r&&"object"==typeof r&&B(r.length)&&r.length<=c&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength}(r))return wn(r,n);if(null!==r&&"object"==typeof r&&"number"==typeof r.length&&P(r.length)&&r.length>=0)return function(r,n){var t,e,o;for(t=r.length,e=n.length,o=t-1;o>=0;o--)r[o+e]=r[o];for(o=0;o<e;o++)r[o]=n[o];return r.length=t+e,r}(r,n);throw new TypeError(H("1WnAi,Og",r))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).prepend=n();
//# sourceMappingURL=index.js.map
