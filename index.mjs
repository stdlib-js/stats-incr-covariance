// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function n(n,s){var i,o,m,l,d;if(l=0,d=0,arguments.length){if(!r(n))throw new TypeError(e("1H949,Hq",n));if(!r(s))throw new TypeError(e("1H94A,Hr",s));return o=n,m=s,f}return o=0,m=0,h;function h(r,e){return 0===arguments.length?0===d?null:1===d?t(l)?NaN:0:l/(d-1):(o+=(i=r-o)/(d+=1),l+=i*(e-(m+=(e-m)/d)),d<2?t(l)?NaN:0:l/(d-1))}function f(r,t){return 0===arguments.length?0===d?null:l/d:(l+=(r-o)*(t-m))/(d+=1)}}export{n as default};
//# sourceMappingURL=index.mjs.map
