## 2629. Function Composition

[문제](https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = (functions) => {
  if (functions.length === 0) {
    return (x) => x;
  }

  return (x) => {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
fn(4); // 9
```

## 2703. Return Length of Arguments Passed

[문제](https://leetcode.com/problems/return-length-of-arguments-passed/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
const argumentsLength = function (...args) {
  return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
```

## 2666. Allow One Function Call

[문제](https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @param {Function} fn
 * @return {Function}
 */
const once = (fn) => {
  let called = false;

  return function (...args) {
    if (called) {
      return undefined;
    } else {
      called = true;
      return fn(...args);
    }
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
```

## 2623. Memoize

[문제](https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
```
