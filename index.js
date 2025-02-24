// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString,t=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,o="function"==typeof i?i.toStringTag:"",a=e()?function(r){var e,i,a,u,f;if(null==r)return n.call(r);i=r[o],f=o,e=null!=(u=r)&&t.call(u,f);try{r[o]=void 0}catch(e){return n.call(r)}return a=n.call(r),e?r[o]=i:delete r[o],a}:function(r){return n.call(r)},u=Array.isArray?Array.isArray:function(r){return"[object Array]"===a(r)},f=Math.floor;function c(r){return f(r)===r}var s=9007199254740991,l="function"==typeof Object.defineProperty?Object.defineProperty:null,p=Object.defineProperty;function y(r){return"number"==typeof r}function g(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function h(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+g(i):g(i)+r,t&&(r="-"+r)),r}var d=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function b(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!y(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=h(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=h(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===v.call(r.specifier)?v.call(n):d.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var w=Math.abs,m=String.prototype.toLowerCase,A=String.prototype.toUpperCase,E=String.prototype.replace,_=/e\+(\d)$/,j=/e-(\d)$/,S=/^(\d+)$/,T=/^(\d+)e/,U=/\.0$/,I=/\.0*e/,x=/(\..*[^0])0*e/;function O(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!y(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":w(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=E.call(n,x,"$1e"),n=E.call(n,I,"e"),n=E.call(n,U,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=E.call(n,_,"e+0$1"),n=E.call(n,j,"e-0$1"),r.alternate&&(n=E.call(n,S,"$1."),n=E.call(n,T,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===A.call(r.specifier)?A.call(n):m.call(n)}function N(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var k=String.fromCharCode,F=Array.isArray;function V(r){return r!=r}function L(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function P(r){var e,n,t,i,o,a,u,f,c,s,l,p,y;if(!F(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if("string"==typeof(t=r[f]))a+=t;else{if(e=void 0!==t.precision,!(t=L(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,V(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,V(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=b(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!V(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=V(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=O(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=h(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+N(y):N(y)+s)),a+=t.arg||"",u+=1}return a}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function W(r){var e,n,t,i;for(n=[],i=0,t=B.exec(r);t;)(e=r.slice(i,B.lastIndex-t[0].length)).length&&n.push(e),n.push(R(t)),i=B.lastIndex,t=B.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function $(r){var e,n;if("string"!=typeof r)throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[W(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return P.apply(null,e)}var G=Object.prototype,C=G.toString,H=G.__defineGetter__,M=G.__defineSetter__,Y=G.__lookupGetter__,Z=G.__lookupSetter__,X=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?p:function(r,e,n){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===C.call(n))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Y.call(r,e)||Z.call(r,e)?(t=r.__proto__,r.__proto__=G,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&H&&H.call(r,e,n.get),a&&M&&M.call(r,e,n.set),r};function q(r,e,n){X(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function z(r){return"number"==typeof r}var D=Number,J=D.prototype.toString,K=e();function Q(r){return"object"==typeof r&&(r instanceof D||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===a(r)))}function rr(r){return z(r)||Q(r)}q(rr,"isPrimitive",z),q(rr,"isObject",Q);var er=Number.POSITIVE_INFINITY,nr=D.NEGATIVE_INFINITY;function tr(r){return r<er&&r>nr&&c(r)}function ir(r){return z(r)&&tr(r)}function or(r){return Q(r)&&tr(r.valueOf())}function ar(r){return ir(r)||or(r)}function ur(r){return ir(r)&&r>=0}function fr(r){return or(r)&&r.valueOf()>=0}function cr(r){return ur(r)||fr(r)}function sr(){var r,e=arguments,n="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}q(ar,"isPrimitive",ir),q(ar,"isObject",or),q(cr,"isPrimitive",ur),q(cr,"isObject",fr);var lr,pr="function"==typeof ArrayBuffer,yr="function"==typeof Float64Array,gr="function"==typeof Float64Array?Float64Array:null,hr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,e,n;if("function"!=typeof gr)return!1;try{e=new gr([1,3.14,-3.14,NaN]),n=e,r=(yr&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var dr,vr=lr,br="function"==typeof ArrayBuffer?ArrayBuffer:null,wr="function"==typeof ArrayBuffer?ArrayBuffer:void 0;dr=function(){var r,e,n,t;if("function"!=typeof br)return!1;try{n=new br(16),t=n,(r=(pr&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===a(t))&&"function"==typeof br.isView)&&((e=new vr(n))[0]=-3.14,e[1]=NaN,r=r&&br.isView(e)&&16===n.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var mr=dr;function Ar(r){return r!=r}function Er(r){return r===er||r===nr}function _r(r){return c(r/2)}function jr(r){return _r(r>0?r-1:r+1)}var Sr=Math.sqrt;function Tr(r){return Math.abs(r)}var Ur,Ir="function"==typeof Uint32Array,xr="function"==typeof Uint32Array?Uint32Array:null,Or="function"==typeof Uint32Array?Uint32Array:void 0;Ur=function(){var r,e,n;if("function"!=typeof xr)return!1;try{e=new xr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(Ir&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Or:function(){throw new Error("not implemented")};var Nr,kr=Ur,Fr="function"==typeof Uint8Array,Vr="function"==typeof Uint8Array?Uint8Array:null,Lr="function"==typeof Uint8Array?Uint8Array:void 0;Nr=function(){var r,e,n;if("function"!=typeof Vr)return!1;try{e=new Vr(e=[1,3.14,-3.14,256,257]),n=e,r=(Fr&&n instanceof Uint8Array||"[object Uint8Array]"===a(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var Pr,Br=Nr,Rr="function"==typeof Uint16Array,Wr="function"==typeof Uint16Array?Uint16Array:null,$r="function"==typeof Uint16Array?Uint16Array:void 0;Pr=function(){var r,e,n;if("function"!=typeof Wr)return!1;try{e=new Wr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Rr&&n instanceof Uint16Array||"[object Uint16Array]"===a(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Gr,Cr={uint16:Pr,uint8:Br};(Gr=new Cr.uint16(1))[0]=4660;var Hr,Mr,Yr=52===new Cr.uint8(Gr.buffer)[0];!0===Yr?(Hr=1,Mr=0):(Hr=0,Mr=1);var Zr={HIGH:Hr,LOW:Mr},Xr=new vr(1),qr=new kr(Xr.buffer),zr=Zr.HIGH,Dr=Zr.LOW;function Jr(r,e,n,t){return Xr[0]=r,e[t]=qr[zr],e[t+n]=qr[Dr],e}function Kr(r){return Jr(r,[0,0],1,0)}q(Kr,"assign",Jr);var Qr=!0===Yr?0:1,re=new vr(1),ee=new kr(re.buffer);function ne(r,e){return re[0]=r,ee[Qr]=e>>>0,re[0]}function te(r){return 0|r}var ie,oe,ae=2147483647,ue=2147483648,fe=!0===Yr?1:0,ce=new vr(1),se=new kr(ce.buffer);function le(r){return ce[0]=r,se[fe]}!0===Yr?(ie=1,oe=0):(ie=0,oe=1);var pe={HIGH:ie,LOW:oe},ye=new vr(1),ge=new kr(ye.buffer),he=pe.HIGH,de=pe.LOW;function ve(r,e){return ge[he]=r,ge[de]=e,ye[0]}var be=[0,0];function we(r,e){var n,t;return Kr.assign(r,be,1,0),n=be[0],n&=ae,t=le(e),ve(n|=t&=ue,be[1])}var me=1072693247,Ae=1e300,Ee=1e-300,_e=!0===Yr?1:0,je=new vr(1),Se=new kr(je.buffer);function Te(r,e){return je[0]=r,Se[_e]=e>>>0,je[0]}var Ue=1023,Ie=1048575,xe=1048576,Oe=1072693248,Ne=536870912,ke=524288,Fe=20,Ve=9007199254740992,Le=.9617966939259756,Pe=.9617967009544373,Be=-7.028461650952758e-9,Re=[1,1.5],We=[0,.5849624872207642],$e=[0,1.350039202129749e-8],Ge=1.4426950408889634,Ce=1.4426950216293335,He=1.9259629911266175e-8,Me=1023,Ye=-1023,Ze=-1074,Xe=22250738585072014e-324,qe=4503599627370496;function ze(r,e,n,t){return Ar(r)||Er(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Tr(r)<Xe?(e[t]=r*qe,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}q((function(r){return ze(r,[0,0],1,0)}),"assign",ze);var De=2146435072,Je=2220446049250313e-31,Ke=2148532223,Qe=[0,0],rn=[0,0];function en(r,e){var n,t;return 0===e||0===r||Ar(r)||Er(r)?r:(ze(r,Qe,1,0),r=Qe[0],e+=Qe[1],e+=function(r){var e=le(r);return(e=(e&De)>>>20)-Ue|0}(r),e<Ze?we(0,r):e>Me?r<0?nr:er:(e<=Ye?(e+=52,t=Je):t=1,Kr.assign(r,rn,1,0),n=rn[0],n&=Ke,t*ve(n|=e+Ue<<20,rn[1])))}var nn=.6931471805599453,tn=1048575,on=1048576,an=1071644672,un=20,fn=.6931471824645996,cn=-1.904654299957768e-9,sn=1072693247,ln=1105199104,pn=1139802112,yn=1083179008,gn=1072693248,hn=1083231232,dn=3230714880,vn=31,bn=1e300,wn=1e-300,mn=8008566259537294e-32,An=[0,0],En=[0,0];function _n(r,e){var n,t,i,o,a,u,f,s,l,p,y,g,h,d;if(Ar(r)||Ar(e))return NaN;if(Kr.assign(e,An,1,0),a=An[0],0===An[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Sr(r);if(-.5===e)return 1/Sr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Er(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Tr(r)<1==(e===er)?0:er}(r,e)}if(Kr.assign(r,An,1,0),o=An[0],0===An[1]){if(0===o)return function(r,e){return e===nr?er:e===er?0:e>0?jr(e)?r:0:jr(e)?we(er,r):er}(r,e);if(1===r)return 1;if(-1===r&&jr(e))return-1;if(Er(r))return r===nr?_n(-0,-e):e<0?0:er}if(r<0&&!1===c(e))return(r-r)/(r-r);if(i=Tr(r),n=o&ae|0,t=a&ae|0,f=a>>>vn|0,u=(u=o>>>vn|0)&&jr(e)?-1:1,t>ln){if(t>pn)return function(r,e){return(le(r)&ae)<=me?e<0?Ae*Ae:Ee*Ee:e>0?Ae*Ae:Ee*Ee}(r,e);if(n<sn)return 1===f?u*bn*bn:u*wn*wn;if(n>gn)return 0===f?u*bn*bn:u*wn*wn;y=function(r,e){var n,t,i,o,a,u,f;return o=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*He-o*Ge)-((t=ne(t=(a=Ce*i)+u,0))-a),r[0]=t,r[1]=n,r}(En,i)}else y=function(r,e,n){var t,i,o,a,u,f,c,s,l,p,y,g,h,d,v,b,w,m,A,E,_;return m=0,n<xe&&(m-=53,n=le(e*=Ve)),m+=(n>>Fe)-Ue|0,n=(A=n&Ie|0)|Oe|0,A<=235662?E=0:A<767610?E=1:(E=0,m+=1,n-=xe),a=ne(i=(b=(e=Te(e,n))-(c=Re[E]))*(w=1/(e+c)),0),t=(n>>1|Ne)+ke,f=Te(0,t+=E<<18),v=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=ne(f=3+(o=a*a)+(v+=(u=w*(b-a*f-a*(e-(f-c))))*(a+i)),0),l=ne(l=(b=a*f)+(w=u*f+(v-(f-3-o))*i),0),p=Pe*l,h=(y=Be*l+(w-(l-b))*Le+$e[E])-((g=ne(g=p+y+(s=We[E])+(d=m),0))-d-s-p),r[0]=g,r[1]=h,r}(En,i,n);if(g=(p=(e-(s=ne(e,0)))*y[0]+e*y[1])+(l=s*y[0]),Kr.assign(g,An,1,0),h=te(An[0]),d=te(An[1]),h>=yn){if(0!=(h-yn|d))return u*bn*bn;if(p+mn>g-l)return u*bn*bn}else if((h&ae)>=hn){if(0!=(h-dn|d))return u*wn*wn;if(p<=g-l)return u*wn*wn}return g=function(r,e,n){var t,i,o,a,u,f,c,s,l,p;return l=((s=r&ae|0)>>un)-Ue|0,c=0,s>an&&(i=Te(0,((c=r+(on>>l+1)>>>0)&~(tn>>(l=((c&ae)>>un)-Ue|0)))>>>0),c=(c&tn|on)>>un-l>>>0,r<0&&(c=-c),e-=i),r=te(r=le(f=1-((f=(o=(i=ne(i=n+e,0))*fn)+(a=(n-(i-e))*nn+i*cn))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<un>>>0)>>un<=0?en(f,c):Te(f,r)}(h,l,p),u*g}var jn=Math.ceil,Sn=0x40000000000000,Tn=1.4426950407214463,Un=1.6751713164886512e-10,In=2146435072,xn=1048576,On=1072693248,Nn=[0,0];function kn(r){var e,n;return Ar(r)||Er(r)||0===r?r:(r<0?(r=-r,e=-1):e=1,n=function(r){var e,n,t,i,o,a,u,f,c,s,l,p,y;if(Ar(r)||r<0)return NaN;if(Kr.assign(r,Nn,1,0),i=Nn[0],o=Nn[1],y=0,i<xn){if(0==(i&ae|o))return nr;y-=54,i=le(r*=Sn)}return i>=In?r+r:i===On&&0===o?0:(y+=(i>>20)-Ue|0,l=y+=(p=614244+(i&=tn)&xn|0)>>20|0,t=.5*(f=(r=Te(r,i|p^On))-1)*f,c=function(r){var e,n,t,i,o,a;return e=(o=(i=(t=r/(2+r))*t)*i)*(0===(a=o)?.3999999999940942:.3999999999940942+a*(.22222198432149784+.15313837699209373*a)),n=i*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(o),t*(.5*r*r+(n+e))}(f),n=((u=f-(a=ne(a=f-t,0))-t+c)+a)*Un+u*Tn,(n+=l-(s=l+(e=a*Tn))+e)+(e=s))}(r),n===Ze?r:(n=-1===e?f(n):jn(n))>Me?er:e*_n(2,n))}return function(r,e){if(!("object"==typeof(n=e)&&null!==n&&"number"==typeof n.length&&c(n.length)&&n.length>=0&&n.length<=s))throw new TypeError(sr("1Wn2y",e));var n;if(u(r))return function(r,e){var n;for(n=e.length-1;n>=0;n--)r.unshift(e[n]);return r}(r,e);if(function(r){return null!==r&&"object"==typeof r&&ur(r.length)&&r.length<=s&&"number"==typeof r.BYTES_PER_ELEMENT&&"number"==typeof r.byteOffset&&"number"==typeof r.byteLength}(r))return function(r,e){var n,t,i,o,a,u,f,c;if(o=r.length,t=(u=e.length)*r.BYTES_PER_ELEMENT,(i=r.byteOffset)<t)for(n=o*r.BYTES_PER_ELEMENT,i=(a=new mr(kn(n+t+i+1))).byteLength-n-t,f=new r.constructor(a,i,o+u),c=0;c<o;c++)f[c+u]=r[c];else i-=t,f=new r.constructor(r.buffer,i,o+u);for(c=0;c<u;c++)f[c]=e[c];return f}(r,e);if(null!==r&&"object"==typeof r&&"number"==typeof r.length&&ar(r.length)&&r.length>=0)return function(r,e){var n,t,i;for(n=r.length,t=e.length,i=n-1;i>=0;i--)r[i+t]=r[i];for(i=0;i<t;i++)r[i]=e[i];return r.length=n+t,r}(r,e);throw new TypeError(sr("1WnAi",r))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).prepend=e();
//# sourceMappingURL=index.js.map
