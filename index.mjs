// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var n=r.isPrimitive,s=t,i=e;var o=function(r,t){var e,o,m,d,l;if(d=0,l=0,arguments.length){if(!n(r))throw new TypeError(i("0dT4M",r));if(!n(t))throw new TypeError(i("0dT4N",t));return o=r,m=t,h}return o=0,m=0,a;function a(r,t){return 0===arguments.length?0===l?null:1===l?s(d)?NaN:0:d/(l-1):(o+=(e=r-o)/(l+=1),d+=e*(t-(m+=(t-m)/l)),l<2?s(d)?NaN:0:d/(l-1))}function h(r,t){return 0===arguments.length?0===l?null:d/l:(d+=(r-o)*(t-m))/(l+=1)}};export{o as default};
//# sourceMappingURL=index.mjs.map