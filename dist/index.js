"use strict";var b=function(n,u){return function(){return u||n((u={exports:{}}).exports,u),u.exports}};var v=b(function(q,l){
var o=require('@stdlib/assert-is-number/dist').isPrimitive,c=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist');function h(n,u){var s,i,t,e,r;if(e=0,r=0,arguments.length){if(!o(n))throw new TypeError(f('1H949',n));if(!o(u))throw new TypeError(f('1H94A',u));return i=n,t=u,N}return i=0,t=0,g;function g(m,a){return arguments.length===0?r===0?null:r===1?c(e)?NaN:0:e/(r-1):(r+=1,s=m-i,i+=s/r,t+=(a-t)/r,e+=s*(a-t),r<2?c(e)?NaN:0:e/(r-1))}function N(m,a){return arguments.length===0?r===0?null:e/r:(r+=1,e+=(m-i)*(a-t),e/r)}}l.exports=h
});var d=v();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
