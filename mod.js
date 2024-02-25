// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString;var t=Object.prototype.hasOwnProperty;var i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"";var o=e()?function(r){var e,i,o,u,f;if(null==r)return n.call(r);i=r[a],f=a,e=null!=(u=r)&&t.call(u,f);try{r[a]=void 0}catch(e){return n.call(r)}return o=n.call(r),e?r[a]=i:delete r[a],o}:function(r){return n.call(r)};var u=Array.isArray?Array.isArray:function(r){return"[object Array]"===o(r)},f=Math.floor;function c(r){return f(r)===r}var s=9007199254740991;var l="function"==typeof Object.defineProperty?Object.defineProperty:null;var p=Object.defineProperty;function y(r){return"number"==typeof r}function v(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function g(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+v(i):v(i)+r,t&&(r="-"+r)),r}var h=String.prototype.toLowerCase,b=String.prototype.toUpperCase;function d(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!y(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=g(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=g(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===b.call(r.specifier)?b.call(n):h.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var w=Math.abs,m=String.prototype.toLowerCase,A=String.prototype.toUpperCase,E=String.prototype.replace,_=/e\+(\d)$/,j=/e-(\d)$/,S=/^(\d+)$/,U=/^(\d+)e/,I=/\.0$/,T=/\.0*e/,N=/(\..*[^0])0*e/;function O(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!y(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":w(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=E.call(n,N,"$1e"),n=E.call(n,T,"e"),n=E.call(n,I,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=E.call(n,_,"e+0$1"),n=E.call(n,j,"e-0$1"),r.alternate&&(n=E.call(n,S,"$1."),n=E.call(n,U,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===A.call(r.specifier)?A.call(n):m.call(n)}function x(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var k=String.fromCharCode,F=isNaN,V=Array.isArray;function L(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function P(r){var e,n,t,i,a,o,u,f,c,s,l,p,y;if(!V(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(t=r[f],"string"==typeof t)o+=t;else{if(e=void 0!==t.precision,!(t=L(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,F(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,F(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=d(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!F(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=F(a)?String(t.arg):k(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=O(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=g(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+x(y):x(y)+s)),o+=t.arg||"",u+=1}return o}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function W(r){var e,n,t,i;for(n=[],i=0,t=B.exec(r);t;)(e=r.slice(i,B.lastIndex-t[0].length)).length&&n.push(e),n.push(R(t)),i=B.lastIndex,t=B.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function $(r){var e,n;if("string"!=typeof r)throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[W(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return P.apply(null,e)}var G=Object.prototype,C=G.toString,H=G.__defineGetter__,M=G.__defineSetter__,Y=G.__lookupGetter__,Z=G.__lookupSetter__;var X=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?p:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===C.call(n))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Y.call(r,e)||Z.call(r,e)?(t=r.__proto__,r.__proto__=G,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&H&&H.call(r,e,n.get),o&&M&&M.call(r,e,n.set),r};function q(r,e,n){X(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function z(r){return"number"==typeof r}var D=Number,J=D.prototype.toString;var K=e();function Q(r){return"object"==typeof r&&(r instanceof D||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===o(r)))}function rr(r){return z(r)||Q(r)}q(rr,"isPrimitive",z),q(rr,"isObject",Q);var er=Number.POSITIVE_INFINITY,nr=D.NEGATIVE_INFINITY;function tr(r){return r<er&&r>nr&&c(r)}function ir(r){return z(r)&&tr(r)}function ar(r){return Q(r)&&tr(r.valueOf())}function or(r){return ir(r)||ar(r)}function ur(r){return ir(r)&&r>=0}function fr(r){return ar(r)&&r.valueOf()>=0}function cr(r){return ur(r)||fr(r)}function sr(){var r,e=arguments,n="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}q(or,"isPrimitive",ir),q(or,"isObject",ar),q(cr,"isPrimitive",ur),q(cr,"isObject",fr);var lr="function"==typeof ArrayBuffer;var pr="function"==typeof Float64Array;var yr="function"==typeof Float64Array?Float64Array:null;var vr,gr="function"==typeof Float64Array?Float64Array:void 0;vr=function(){var r,e,n;if("function"!=typeof yr)return!1;try{e=new yr([1,3.14,-3.14,NaN]),n=e,r=(pr&&n instanceof Float64Array||"[object Float64Array]"===o(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var hr=vr,br="function"==typeof ArrayBuffer?ArrayBuffer:null;var dr,wr="function"==typeof ArrayBuffer?ArrayBuffer:void 0;dr=function(){var r,e,n,t;if("function"!=typeof br)return!1;try{n=new br(16),t=n,(r=(lr&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===o(t))&&"function"==typeof br.isView)&&((e=new hr(n))[0]=-3.14,e[1]=NaN,r=r&&br.isView(e)&&16===n.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var mr=dr;function Ar(r){return r!=r}function Er(r){return r===er||r===nr}function _r(r){return c(r/2)}function jr(r){return _r(r>0?r-1:r+1)}var Sr=Math.sqrt;function Ur(r){return Math.abs(r)}var Ir="function"==typeof Uint32Array;var Tr="function"==typeof Uint32Array?Uint32Array:null;var Nr,Or="function"==typeof Uint32Array?Uint32Array:void 0;Nr=function(){var r,e,n;if("function"!=typeof Tr)return!1;try{e=new Tr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(Ir&&n instanceof Uint32Array||"[object Uint32Array]"===o(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Or:function(){throw new Error("not implemented")};var xr=Nr,kr="function"==typeof Uint8Array;var Fr="function"==typeof Uint8Array?Uint8Array:null;var Vr,Lr="function"==typeof Uint8Array?Uint8Array:void 0;Vr=function(){var r,e,n;if("function"!=typeof Fr)return!1;try{e=new Fr(e=[1,3.14,-3.14,256,257]),n=e,r=(kr&&n instanceof Uint8Array||"[object Uint8Array]"===o(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var Pr=Vr,Br="function"==typeof Uint16Array;var Rr="function"==typeof Uint16Array?Uint16Array:null;var Wr,$r="function"==typeof Uint16Array?Uint16Array:void 0;Wr=function(){var r,e,n;if("function"!=typeof Rr)return!1;try{e=new Rr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Br&&n instanceof Uint16Array||"[object Uint16Array]"===o(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Gr,Cr={uint16:Wr,uint8:Pr};(Gr=new Cr.uint16(1))[0]=4660;var Hr,Mr,Yr=52===new Cr.uint8(Gr.buffer)[0];!0===Yr?(Hr=1,Mr=0):(Hr=0,Mr=1);var Zr={HIGH:Hr,LOW:Mr},Xr=new hr(1),qr=new xr(Xr.buffer),zr=Zr.HIGH,Dr=Zr.LOW;function Jr(r,e,n,t){return Xr[0]=r,e[t]=qr[zr],e[t+n]=qr[Dr],e}function Kr(r){return Jr(r,[0,0],1,0)}q(Kr,"assign",Jr);var Qr=!0===Yr?0:1,re=new hr(1),ee=new xr(re.buffer);function ne(r,e){return re[0]=r,ee[Qr]=e>>>0,re[0]}function te(r){return 0|r}var ie,ae,oe=2147483647,ue=2147483648,fe=!0===Yr?1:0,ce=new hr(1),se=new xr(ce.buffer);function le(r){return ce[0]=r,se[fe]}!0===Yr?(ie=1,ae=0):(ie=0,ae=1);var pe={HIGH:ie,LOW:ae},ye=new hr(1),ve=new xr(ye.buffer),ge=pe.HIGH,he=pe.LOW;function be(r,e){return ve[ge]=r,ve[he]=e,ye[0]}var de=[0,0];function we(r,e){var n,t;return Kr.assign(r,de,1,0),n=de[0],n&=oe,t=le(e),be(n|=t&=ue,de[1])}var me=1072693247,Ae=1e300,Ee=1e-300;var _e=!0===Yr?1:0,je=new hr(1),Se=new xr(je.buffer);function Ue(r,e){return je[0]=r,Se[_e]=e>>>0,je[0]}var Ie=1023;var Te=1048575,Ne=1048576,Oe=1072693248,xe=536870912,ke=524288,Fe=20,Ve=9007199254740992,Le=.9617966939259756,Pe=.9617967009544373,Be=-7.028461650952758e-9,Re=[1,1.5],We=[0,.5849624872207642],$e=[0,1.350039202129749e-8];var Ge=1.4426950408889634,Ce=1.4426950216293335,He=1.9259629911266175e-8;var Me=1023,Ye=-1023,Ze=-1074,Xe=22250738585072014e-324,qe=4503599627370496;function ze(r,e,n,t){return Ar(r)||Er(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Ur(r)<Xe?(e[t]=r*qe,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}q((function(r){return ze(r,[0,0],1,0)}),"assign",ze);var De=2146435072;var Je=2220446049250313e-31,Ke=2148532223,Qe=[0,0],rn=[0,0];function en(r,e){var n,t;return 0===e||0===r||Ar(r)||Er(r)?r:(ze(r,Qe,1,0),r=Qe[0],e+=Qe[1],e+=function(r){var e=le(r);return(e=(e&De)>>>20)-Ie|0}(r),e<Ze?we(0,r):e>Me?r<0?nr:er:(e<=Ye?(e+=52,t=Je):t=1,Kr.assign(r,rn,1,0),n=rn[0],n&=Ke,t*be(n|=e+Ie<<20,rn[1])))}var nn=.6931471805599453,tn=1048575;var an=1048576,on=1071644672,un=20,fn=.6931471824645996,cn=-1.904654299957768e-9;var sn=1072693247,ln=1105199104,pn=1139802112,yn=1083179008,vn=1072693248,gn=1083231232,hn=3230714880,bn=31,dn=1e300,wn=1e-300,mn=8008566259537294e-32,An=[0,0],En=[0,0];function _n(r,e){var n,t,i,a,o,u,f,s,l,p,y,v,g,h;if(Ar(r)||Ar(e))return NaN;if(Kr.assign(e,An,1,0),o=An[0],0===An[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Sr(r);if(-.5===e)return 1/Sr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Er(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Ur(r)<1==(e===er)?0:er}(r,e)}if(Kr.assign(r,An,1,0),a=An[0],0===An[1]){if(0===a)return function(r,e){return e===nr?er:e===er?0:e>0?jr(e)?r:0:jr(e)?we(er,r):er}(r,e);if(1===r)return 1;if(-1===r&&jr(e))return-1;if(Er(r))return r===nr?_n(-0,-e):e<0?0:er}if(r<0&&!1===c(e))return(r-r)/(r-r);if(i=Ur(r),n=a&oe|0,t=o&oe|0,f=o>>>bn|0,u=(u=a>>>bn|0)&&jr(e)?-1:1,t>ln){if(t>pn)return function(r,e){return(le(r)&oe)<=me?e<0?Ae*Ae:Ee*Ee:e>0?Ae*Ae:Ee*Ee}(r,e);if(n<sn)return 1===f?u*dn*dn:u*wn*wn;if(n>vn)return 0===f?u*dn*dn:u*wn*wn;y=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*He-a*Ge)-((t=ne(t=(o=Ce*i)+u,0))-o),r[0]=t,r[1]=n,r}(En,i)}else y=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,v,g,h,b,d,w,m,A,E,_;return m=0,n<Ne&&(m-=53,n=le(e*=Ve)),m+=(n>>Fe)-Ie|0,n=(A=n&Te|0)|Oe|0,A<=235662?E=0:A<767610?E=1:(E=0,m+=1,n-=Ne),o=ne(i=(d=(e=Ue(e,n))-(c=Re[E]))*(w=1/(e+c)),0),t=(n>>1|xe)+ke,f=Ue(0,t+=E<<18),b=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=ne(f=3+(a=o*o)+(b+=(u=w*(d-o*f-o*(e-(f-c))))*(o+i)),0),l=ne(l=(d=o*f)+(w=u*f+(b-(f-3-a))*i),0),p=Pe*l,g=(y=Be*l+(w-(l-d))*Le+$e[E])-((v=ne(v=p+y+(s=We[E])+(h=m),0))-h-s-p),r[0]=v,r[1]=g,r}(En,i,n);if(v=(p=(e-(s=ne(e,0)))*y[0]+e*y[1])+(l=s*y[0]),Kr.assign(v,An,1,0),g=te(An[0]),h=te(An[1]),g>=yn){if(0!=(g-yn|h))return u*dn*dn;if(p+mn>v-l)return u*dn*dn}else if((g&oe)>=gn){if(0!=(g-hn|h))return u*wn*wn;if(p<=v-l)return u*wn*wn}return v=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&oe|0)>>un)-Ie|0,c=0,s>on&&(i=Ue(0,((c=r+(an>>l+1)>>>0)&~(tn>>(l=((c&oe)>>un)-Ie|0)))>>>0),c=(c&tn|an)>>un-l>>>0,r<0&&(c=-c),e-=i),r=te(r=le(f=1-((f=(a=(i=ne(i=n+e,0))*fn)+(o=(n-(i-e))*nn+i*cn))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<un>>>0)>>un<=0?en(f,c):Ue(f,r)}(g,l,p),u*v}var jn=Math.ceil;var Sn=1048575,Un=.3333333333333333;var In=0x40000000000000,Tn=1.4426950407214463,Nn=1.6751713164886512e-10,On=2146435072,xn=1048576,kn=1072693248,Fn=[0,0];function Vn(r){var e,n,t,i,a,o;if(Ar(r)||r<0)return NaN;if(Kr.assign(r,Fn,1,0),n=Fn[0],t=Fn[1],o=0,n<xn){if(0==(n&oe|t))return nr;o-=54,n=le(r*=In)}return n>=On?r+r:(o+=(n>>20)-Ie|0,o+=(a=(n&=tn)+614244&1048576|0)>>20|0,i=function(r){var e,n,t,i,a,o,u,f,c,s,l;return i=le(r),a=r-1,(Sn&2+i)<3?0===a?0:a*a*(Un*a-.5):(s=(i&=Sn)-398458|0,l=440401-i|0,n=(c=(u=(o=a/(2+a))*o)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),t=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),f=t+n,(s|=l)>0?o*((e=.5*a*a)+f)-e:o*(f-a))}(r=Ue(r,n|a^kn)),e=ne(r-=1,0),(r+i)*Nn+(r-e+i)*Tn+e*Tn+o)}function Ln(r,e){var n,t,i,a,o,u,c,s,l,p,y;if(a=r.length,t=(u=e.length)*r.BYTES_PER_ELEMENT,(i=r.byteOffset)<t)for(n=a*r.BYTES_PER_ELEMENT,i=(o=new mr(Ar(l=n+t+i+1)||Er(l)||0===l?l:(l<0?(l=-l,p=-1):p=1,(y=Vn(l))===Ze?l:(y=-1===p?f(y):jn(y))>Me?er:p*_n(2,y)))).byteLength-n-t,c=new r.constructor(o,i,a+u),s=0;s<a;s++)c[s+u]=r[s];else i-=t,c=new r.constructor(r.buffer,i,a+u);for(s=0;s<u;s++)c[s]=e[s];return c}function Pn(r,e){if(!("object"==typeof(n=e)&&null!==n&&"number"==typeof n.length&&c(n.length)&&n.length>=0&&n.length<=s))throw new TypeError(sr("1Wn2y",e));var n;if(u(r))return function(r,e){var n;for(n=e.length-1;n>=0;n--)r.unshift(e[n]);return r}(r,e);if(function(r){return null!==r&&"object"==typeof r&&ur(r.length)&&r.length<=s&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength}(r))return Ln(r,e);if(null!==r&&"object"==typeof r&&"number"==typeof r.length&&or(r.length)&&r.length>=0)return function(r,e){var n,t,i;for(n=r.length,t=e.length,i=n-1;i>=0;i--)r[i+t]=r[i];for(i=0;i<t;i++)r[i]=e[i];return r.length=n+t,r}(r,e);throw new TypeError(sr("1WnAi",r))}export{Pn as default};
//# sourceMappingURL=mod.js.map
