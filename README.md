<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrcovariance

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute an [unbiased sample covariance][covariance] incrementally.

<section class="intro">

For unknown population means, the [unbiased sample covariance][covariance] is defined as

<!-- <equation class="equation" label="eq:unbiased_sample_covariance_unknown_means" align="center" raw="\operatorname{cov_n} = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x}_n)(y_i - \bar{y}_n)" alt="Equation for the unbiased sample covariance for unknown population means."> -->

<div class="equation" align="center" data-raw-text="\operatorname{cov_n} = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x}_n)(y_i - \bar{y}_n)" data-equation="eq:unbiased_sample_covariance_unknown_means">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/covariance/docs/img/equation_unbiased_sample_covariance_unknown_means.svg" alt="Equation for the unbiased sample covariance for unknown population means.">
    <br>
</div>

<!-- </equation> -->

For known population means, the [unbiased sample covariance][covariance] is defined as

<!-- <equation class="equation" label="eq:unbiased_sample_covariance_known_means" align="center" raw="\operatorname{cov_n} = \frac{1}{n} \sum_{i=0}^{n-1} (x_i - \mu_x)(y_i - \mu_y)" alt="Equation for the unbiased sample covariance for known population means."> -->

<div class="equation" align="center" data-raw-text="\operatorname{cov_n} = \frac{1}{n} \sum_{i=0}^{n-1} (x_i - \mu_x)(y_i - \mu_y)" data-equation="eq:unbiased_sample_covariance_known_means">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@27e2a43c70db648bb5bbc3fd0cdee050c25adc0b/lib/node_modules/@stdlib/stats/incr/covariance/docs/img/equation_unbiased_sample_covariance_known_means.svg" alt="Equation for the unbiased sample covariance for known population means.">
    <br>
</div>

<!-- </equation> --> 

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import incrcovariance from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-covariance@esm/index.mjs';
```

#### incrcovariance( \[mx, my] )

Returns an accumulator `function` which incrementally computes an [unbiased sample covariance][covariance].

```javascript
var accumulator = incrcovariance();
```

If the means are already known, provide `mx` and `my` arguments.

```javascript
var accumulator = incrcovariance( 3.0, -5.5 );
```

#### accumulator( \[x, y] )

If provided input values `x` and `y`, the accumulator function returns an updated [unbiased sample covariance][covariance]. If not provided input values `x` and `y`, the accumulator function returns the current [unbiased sample covariance][covariance].

```javascript
var accumulator = incrcovariance();

var v = accumulator( 2.0, 1.0 );
// returns 0.0

v = accumulator( 1.0, -5.0 );
// returns 3.0

v = accumulator( 3.0, 3.14 );
// returns 4.07

v = accumulator();
// returns 4.07
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import incrcovariance from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-covariance@esm/index.mjs';

var accumulator;
var x;
var y;
var i;

// Initialize an accumulator:
accumulator = incrcovariance();

// For each simulated datum, update the unbiased sample covariance...
for ( i = 0; i < 100; i++ ) {
    x = randu() * 100.0;
    y = randu() * 100.0;
    accumulator( x, y );
}
console.log( accumulator() );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/incr/mcovariance`][@stdlib/stats/incr/mcovariance]</span><span class="delimiter">: </span><span class="description">compute a moving unbiased sample covariance incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/pcorr`][@stdlib/stats/incr/pcorr]</span><span class="delimiter">: </span><span class="description">compute a sample Pearson product-moment correlation coefficient.</span>
-   <span class="package-name">[`@stdlib/stats/incr/variance`][@stdlib/stats/incr/variance]</span><span class="delimiter">: </span><span class="description">compute an unbiased sample variance incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-covariance.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-covariance

[test-image]: https://github.com/stdlib-js/stats-incr-covariance/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-incr-covariance/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-covariance/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-covariance?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-covariance.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-covariance/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-covariance/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-incr-covariance/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-incr-covariance/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-incr-covariance/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-covariance/main/LICENSE

[covariance]: https://en.wikipedia.org/wiki/Covariance

<!-- <related-links> -->

[@stdlib/stats/incr/mcovariance]: https://github.com/stdlib-js/stats-incr-mcovariance/tree/esm

[@stdlib/stats/incr/pcorr]: https://github.com/stdlib-js/stats-incr-pcorr/tree/esm

[@stdlib/stats/incr/variance]: https://github.com/stdlib-js/stats-incr-variance/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
