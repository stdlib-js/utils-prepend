// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString,e=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,o="function"==typeof i?i.toStringTag:"",a=t()?function(r){var t,i,a,f,u;if(null==r)return n.call(r);i=r[o],u=o,t=null!=(f=r)&&e.call(f,u);try{r[o]=void 0}catch(t){return n.call(r)}return a=n.call(r),t?r[o]=i:delete r[o],a}:function(r){return n.call(r)},f=Array.isArray?Array.isArray:function(r){return"[object Array]"===a(r)},u=Math.floor;function c(r){return u(r)===r}var l=9007199254740991,y="function"==typeof Object.defineProperty?Object.defineProperty:null,p=Object.defineProperty;function s(r){return"number"==typeof r}function h(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function v(r,t,n){var e=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+h(i):h(i)+r,e&&(r="-"+r)),r}var g=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function w(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!s(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=v(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=v(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===d.call(r.specifier)?d.call(n):g.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function A(r){return"string"==typeof r}var b=Math.abs,m=String.prototype.toLowerCase,F=String.prototype.toUpperCase,E=String.prototype.replace,U=/e\+(\d)$/,N=/e-(\d)$/,I=/^(\d+)$/,_=/^(\d+)e/,j=/\.0$/,T=/\.0*e/,S=/(\..*[^0])0*e/;function O(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!s(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":b(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=E.call(n,S,"$1e"),n=E.call(n,T,"e"),n=E.call(n,j,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=E.call(n,U,"e+0$1"),n=E.call(n,N,"e-0$1"),r.alternate&&(n=E.call(n,I,"$1."),n=E.call(n,_,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===F.call(r.specifier)?F.call(n):m.call(n)}function V(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function k(r,t,n){var e=t-r.length;return e<0?r:r=n?r+V(e):V(e)+r}var x=String.fromCharCode,P=isNaN,L=Array.isArray;function B(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function $(r){var t,n,e,i,o,a,f,u,c;if(!L(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",f=1,u=0;u<r.length;u++)if(A(e=r[u]))a+=e;else{if(t=void 0!==e.precision,!(e=B(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),n=e.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,P(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,P(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=w(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!P(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=P(o)?String(e.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=O(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=v(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=k(e.arg,e.width,e.padRight)),a+=e.arg||"",f+=1}return a}var G=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function Y(r){var t,n,e,i;for(n=[],i=0,e=G.exec(r);e;)(t=r.slice(i,G.lastIndex-e[0].length)).length&&n.push(t),n.push(R(e)),i=G.lastIndex,e=G.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function H(r){return"string"==typeof r}function M(r){var t,n;if(!H(r))throw new TypeError(M("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[Y(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return $.apply(null,t)}var W=Object.prototype,C=W.toString,Z=W.__defineGetter__,X=W.__defineSetter__,q=W.__lookupGetter__,z=W.__lookupSetter__,D=function(){try{return y({},"x",{}),!0}catch(r){return!1}}()?p:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(M("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===C.call(n))throw new TypeError(M("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(q.call(r,t)||z.call(r,t)?(e=r.__proto__,r.__proto__=W,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Z&&Z.call(r,t,n.get),a&&X&&X.call(r,t,n.set),r};function J(r,t,n){D(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function K(r){return"number"==typeof r}var Q=Number,rr=Q.prototype.toString,tr=t();function nr(r){return"object"==typeof r&&(r instanceof Q||(tr?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===a(r)))}function er(r){return K(r)||nr(r)}J(er,"isPrimitive",K),J(er,"isObject",nr);var ir=Number.POSITIVE_INFINITY,or=Q.NEGATIVE_INFINITY;function ar(r){return r<ir&&r>or&&c(r)}function fr(r){return K(r)&&ar(r)}function ur(r){return nr(r)&&ar(r.valueOf())}function cr(r){return fr(r)||ur(r)}function lr(r){return fr(r)&&r>=0}function yr(r){return ur(r)&&r.valueOf()>=0}function pr(r){return lr(r)||yr(r)}J(cr,"isPrimitive",fr),J(cr,"isObject",ur),J(pr,"isPrimitive",lr),J(pr,"isObject",yr);var sr,hr="function"==typeof ArrayBuffer,vr="function"==typeof Float64Array,gr="function"==typeof Float64Array?Float64Array:null,dr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,t,n;if("function"!=typeof gr)return!1;try{t=new gr([1,3.14,-3.14,NaN]),n=t,r=(vr&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var wr,Ar=sr,br="function"==typeof ArrayBuffer?ArrayBuffer:null,mr="function"==typeof ArrayBuffer?ArrayBuffer:void 0;wr=function(){var r,t,n,e;if("function"!=typeof br)return!1;try{n=new br(16),e=n,(r=(hr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===a(e))&&"function"==typeof br.isView)&&((t=new Ar(n))[0]=-3.14,t[1]=NaN,r=r&&br.isView(t)&&16===n.byteLength&&-3.14===t[0]&&t[1]!=t[1])}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Fr=wr;function Er(r){return r!=r}var Ur=Number.POSITIVE_INFINITY;function Nr(r){return r===Ur||r===or}function Ir(r){return c(r/2)}function _r(r){return Ir(r>0?r-1:r+1)}var jr=Math.sqrt;function Tr(r){return Math.abs(r)}var Sr,Or="function"==typeof Uint32Array,Vr="function"==typeof Uint32Array?Uint32Array:null,kr="function"==typeof Uint32Array?Uint32Array:void 0;Sr=function(){var r,t,n;if("function"!=typeof Vr)return!1;try{t=new Vr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Or&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var xr,Pr=Sr,Lr="function"==typeof Float64Array,Br="function"==typeof Float64Array?Float64Array:null,$r="function"==typeof Float64Array?Float64Array:void 0;xr=function(){var r,t,n;if("function"!=typeof Br)return!1;try{t=new Br([1,3.14,-3.14,NaN]),n=t,r=(Lr&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Gr,Rr=xr,Yr="function"==typeof Uint8Array,Hr="function"==typeof Uint8Array?Uint8Array:null,Mr="function"==typeof Uint8Array?Uint8Array:void 0;Gr=function(){var r,t,n;if("function"!=typeof Hr)return!1;try{t=new Hr(t=[1,3.14,-3.14,256,257]),n=t,r=(Yr&&n instanceof Uint8Array||"[object Uint8Array]"===a(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Mr:function(){throw new Error("not implemented")};var Wr,Cr=Gr,Zr="function"==typeof Uint16Array,Xr="function"==typeof Uint16Array?Uint16Array:null,qr="function"==typeof Uint16Array?Uint16Array:void 0;Wr=function(){var r,t,n;if("function"!=typeof Xr)return!1;try{t=new Xr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Zr&&n instanceof Uint16Array||"[object Uint16Array]"===a(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var zr,Dr={uint16:Wr,uint8:Cr};(zr=new Dr.uint16(1))[0]=4660;var Jr,Kr,Qr=52===new Dr.uint8(zr.buffer)[0];!0===Qr?(Jr=1,Kr=0):(Jr=0,Kr=1);var rt={HIGH:Jr,LOW:Kr},tt=new Rr(1),nt=new Pr(tt.buffer),et=rt.HIGH,it=rt.LOW;function ot(r,t,n,e){return tt[0]=r,t[e]=nt[et],t[e+n]=nt[it],t}function at(r){return ot(r,[0,0],1,0)}J(at,"assign",ot);var ft,ut="function"==typeof Uint32Array,ct="function"==typeof Uint32Array?Uint32Array:null,lt="function"==typeof Uint32Array?Uint32Array:void 0;ft=function(){var r,t,n;if("function"!=typeof ct)return!1;try{t=new ct(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ut&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?lt:function(){throw new Error("not implemented")};var yt,pt=ft,st="function"==typeof Float64Array,ht="function"==typeof Float64Array?Float64Array:null,vt="function"==typeof Float64Array?Float64Array:void 0;yt=function(){var r,t,n;if("function"!=typeof ht)return!1;try{t=new ht([1,3.14,-3.14,NaN]),n=t,r=(st&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?vt:function(){throw new Error("not implemented")};var gt=!0===Qr?0:1,dt=new yt(1),wt=new pt(dt.buffer);function At(r,t){return dt[0]=r,wt[gt]=t>>>0,dt[0]}function bt(r){return 0|r}var mt,Ft=Number.POSITIVE_INFINITY,Et=2147483647,Ut="function"==typeof Uint32Array,Nt="function"==typeof Uint32Array?Uint32Array:null,It="function"==typeof Uint32Array?Uint32Array:void 0;mt=function(){var r,t,n;if("function"!=typeof Nt)return!1;try{t=new Nt(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Ut&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?It:function(){throw new Error("not implemented")};var _t,jt=mt,Tt="function"==typeof Float64Array,St="function"==typeof Float64Array?Float64Array:null,Ot="function"==typeof Float64Array?Float64Array:void 0;_t=function(){var r,t,n;if("function"!=typeof St)return!1;try{t=new St([1,3.14,-3.14,NaN]),n=t,r=(Tt&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Ot:function(){throw new Error("not implemented")};var Vt=!0===Qr?1:0,kt=new _t(1),xt=new jt(kt.buffer);function Pt(r){return kt[0]=r,xt[Vt]}var Lt,Bt="function"==typeof Uint32Array,$t="function"==typeof Uint32Array?Uint32Array:null,Gt="function"==typeof Uint32Array?Uint32Array:void 0;Lt=function(){var r,t,n;if("function"!=typeof $t)return!1;try{t=new $t(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Bt&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Gt:function(){throw new Error("not implemented")};var Rt,Yt,Ht,Mt=Lt,Wt="function"==typeof Float64Array,Ct="function"==typeof Float64Array?Float64Array:null,Zt="function"==typeof Float64Array?Float64Array:void 0;Rt=function(){var r,t,n;if("function"!=typeof Ct)return!1;try{t=new Ct([1,3.14,-3.14,NaN]),n=t,r=(Wt&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Zt:function(){throw new Error("not implemented")},!0===Qr?(Yt=1,Ht=0):(Yt=0,Ht=1);var Xt={HIGH:Yt,LOW:Ht},qt=new Rt(1),zt=new Mt(qt.buffer),Dt=Xt.HIGH,Jt=Xt.LOW;function Kt(r,t){return zt[Dt]=r,zt[Jt]=t,qt[0]}var Qt=[0,0];function rn(r,t){var n,e;return at.assign(r,Qt,1,0),n=Qt[0],n&=Et,e=Pt(t),Kt(n|=e&=2147483648,Qt[1])}var tn,nn="function"==typeof Uint32Array,en="function"==typeof Uint32Array?Uint32Array:null,on="function"==typeof Uint32Array?Uint32Array:void 0;tn=function(){var r,t,n;if("function"!=typeof en)return!1;try{t=new en(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(nn&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?on:function(){throw new Error("not implemented")};var an,fn=tn,un="function"==typeof Float64Array,cn="function"==typeof Float64Array?Float64Array:null,ln="function"==typeof Float64Array?Float64Array:void 0;an=function(){var r,t,n;if("function"!=typeof cn)return!1;try{t=new cn([1,3.14,-3.14,NaN]),n=t,r=(un&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ln:function(){throw new Error("not implemented")};var yn=!0===Qr?1:0,pn=new an(1),sn=new fn(pn.buffer);function hn(r,t){return pn[0]=r,sn[yn]=t>>>0,pn[0]}var vn=1023,gn=1048576,dn=[1,1.5],wn=[0,.5849624872207642],An=[0,1.350039202129749e-8],bn=Number.POSITIVE_INFINITY;function mn(r,t,n,e){return Er(r)||Nr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&Tr(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}J((function(r){return mn(r,[0,0],1,0)}),"assign",mn);var Fn=[0,0],En=[0,0];function Un(r,t){var n,e;return 0===t||0===r||Er(r)||Nr(r)?r:(mn(r,Fn,1,0),t+=Fn[1],t+=function(r){var t=Pt(r);return(t=(2146435072&t)>>>20)-vn|0}(r=Fn[0]),t<-1074?rn(0,r):t>1023?r<0?or:bn:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,at.assign(r,En,1,0),n=En[0],n&=2148532223,e*Kt(n|=t+vn<<20,En[1])))}var Nn=1048575,In=1048576,_n=1083179008,jn=1e300,Tn=1e-300,Sn=[0,0],On=[0,0];function Vn(r,t){var n,e,i,o,a,f,u,l,y,p,s,h,v,g;if(Er(r)||Er(t))return NaN;if(at.assign(t,Sn,1,0),a=Sn[0],0===Sn[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return jr(r);if(-.5===t)return 1/jr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Nr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Tr(r)<1==(t===Ft)?0:Ft}(r,t)}if(at.assign(r,Sn,1,0),o=Sn[0],0===Sn[1]){if(0===o)return function(r,t){return t===or?Ft:t===Ft?0:t>0?_r(t)?r:0:_r(t)?rn(Ft,r):Ft}(r,t);if(1===r)return 1;if(-1===r&&_r(t))return-1;if(Nr(r))return r===or?Vn(-0,-t):t<0?0:Ft}if(r<0&&!1===c(t))return(r-r)/(r-r);if(i=Tr(r),n=o&Et|0,e=a&Et|0,u=a>>>31|0,f=(f=o>>>31|0)&&_r(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(Pt(r)&Et)<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===u?f*jn*jn:f*Tn*Tn;if(n>1072693248)return 0===u?f*jn*jn:f*Tn*Tn;s=function(r,t){var n,e,i,o,a,f;return n=(a=1.9259629911266175e-8*(i=t-1)-i*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=At(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=n,r}(On,i)}else s=function(r,t,n){var e,i,o,a,f,u,c,l,y,p,s,h,v,g,d,w,A,b,m,F,E;return b=0,n<gn&&(b-=53,n=Pt(t*=9007199254740992)),b+=(n>>20)-vn|0,n=1072693248|(m=1048575&n|0),m<=235662?F=0:m<767610?F=1:(F=0,b+=1,n-=gn),a=At(i=(w=(t=hn(t,n))-(c=dn[F]))*(A=1/(t+c)),0),e=524288+(n>>1|536870912),u=hn(0,e+=F<<18),d=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),u=At(u=3+(o=a*a)+(d+=(f=A*(w-a*u-a*(t-(u-c))))*(a+i)),0),v=(s=-7.028461650952758e-9*(y=At(y=(w=a*u)+(A=f*u+(d-(u-3-o))*i),0))+.9617966939259756*(A-(y-w))+An[F])-((h=At(h=(p=.9617967009544373*y)+s+(l=wn[F])+(g=b),0))-g-l-p),r[0]=h,r[1]=v,r}(On,i,n);if(h=(p=(t-(l=At(t,0)))*s[0]+t*s[1])+(y=l*s[0]),at.assign(h,Sn,1,0),v=bt(Sn[0]),g=bt(Sn[1]),v>=_n){if(0!=(v-_n|g))return f*jn*jn;if(p+8008566259537294e-32>h-y)return f*jn*jn}else if((v&Et)>=1083231232){if(0!=(v-3230714880|g))return f*Tn*Tn;if(p<=h-y)return f*Tn*Tn}return h=function(r,t,n){var e,i,o,a,f,u,c,l,y,p;return y=((l=r&Et|0)>>20)-vn|0,c=0,l>1071644672&&(i=hn(0,((c=r+(In>>y+1)>>>0)&~(Nn>>(y=((c&Et)>>20)-vn|0)))>>>0),c=(c&Nn|In)>>20-y>>>0,r<0&&(c=-c),t-=i),r=bt(r=Pt(u=1-((u=(o=.6931471824645996*(i=At(i=n+t,0)))+(a=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(e=u-(i=u*u)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=a-(u-o))+u*f)-u))),(r+=c<<20>>>0)>>20<=0?Un(u,c):hn(u,r)}(v,y,p),f*h}var kn=Math.ceil,xn=1048575,Pn=1.4426950407214463,Ln=[0,0];function Bn(r){var t,n,e,i,o;if(Er(r)||r<0)return NaN;if(at.assign(r,Ln,1,0),o=0,(n=Ln[0])<1048576){if(0==(n&Et|Ln[1]))return or;o-=54,n=Pt(r*=0x40000000000000)}return n>=2146435072?r+r:(o+=(n>>20)-vn|0,o+=(i=614244+(n&=Nn)&1048576|0)>>20|0,e=function(r){var t,n,e,i,o,a,f,u,c,l,y;return i=Pt(r),o=r-1,(xn&2+i)<3?0===o?0:o*o*(.3333333333333333*o-.5):(l=(i&=xn)-398458|0,y=440401-i|0,n=(c=(f=(a=o/(2+o))*a)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),u=e+n,(l|=y)>0?a*((t=.5*o*o)+u)-t:a*(u-o))}(r=hn(r,n|1072693248^i)),1.6751713164886512e-10*((r-=1)+e)+(r-(t=At(r,0))+e)*Pn+t*Pn+o)}var $n=Number.POSITIVE_INFINITY;function Gn(r,t){var n,e,i,o,a,f,c,l,y,p,s;if(o=r.length,e=(f=t.length)*r.BYTES_PER_ELEMENT,(i=r.byteOffset)<e)for(n=o*r.BYTES_PER_ELEMENT,i=(a=new Fr(Er(y=n+e+i+1)||Nr(y)||0===y?y:(y<0?(y=-y,p=-1):p=1,-1074===(s=Bn(y))?y:(s=-1===p?u(s):kn(s))>1023?$n:p*Vn(2,s)))).byteLength-n-e,c=new r.constructor(a,i,o+f),l=0;l<o;l++)c[l+f]=r[l];else i-=e,c=new r.constructor(r.buffer,i,o+f);for(l=0;l<f;l++)c[l]=t[l];return c}return function(r,t){if(!("object"==typeof(n=t)&&null!==n&&"number"==typeof n.length&&c(n.length)&&n.length>=0&&n.length<=l))throw new TypeError(M("invalid argument. Second argument must be an array-like object. Value: `%s`.",t));var n;if(f(r))return function(r,t){var n;for(n=t.length-1;n>=0;n--)r.unshift(t[n]);return r}(r,t);if(function(r){return null!==r&&"object"==typeof r&&lr(r.length)&&r.length<=l&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength}(r))return Gn(r,t);if(null!==r&&"object"==typeof r&&"number"==typeof r.length&&cr(r.length)&&r.length>=0)return function(r,t){var n,e,i;for(n=r.length,e=t.length,i=n-1;i>=0;i--)r[i+e]=r[i];for(i=0;i<e;i++)r[i]=t[i];return r.length=n+e,r}(r,t);throw new TypeError(M("invalid argument. First argument must be either an array, typed array, or an array-like object. Value: `%s`.",r))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).prepend=t();
//# sourceMappingURL=index.js.map
