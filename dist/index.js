"use strict";var b=function(n,e){return function(){try{return e||n((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var v=b(function(q,l){
var o=require('@stdlib/assert-is-number/dist').isPrimitive,c=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist');function h(n,e){var i,a,t,u,r;if(u=0,r=0,arguments.length){if(!o(n))throw new TypeError(f('1H949',n));if(!o(e))throw new TypeError(f('1H94A',e));return a=n,t=e,N}return a=0,t=0,g;function g(m,s){return arguments.length===0?r===0?null:r===1?c(u)?NaN:0:u/(r-1):(r+=1,i=m-a,a+=i/r,t+=(s-t)/r,u+=i*(s-t),r<2?c(u)?NaN:0:u/(r-1))}function N(m,s){return arguments.length===0?r===0?null:u/r:(r+=1,u+=(m-a)*(s-t),u/r)}}l.exports=h
});var d=v();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
