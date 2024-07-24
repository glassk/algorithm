## 2667. Create Hello World Function

[문제](https://leetcode.com/problems/create-hello-world-function/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @return {Function}
 */
const createHelloWorld = function () {
  return function () {
    return 'Hello World';
  };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
```

## 2620. Counter

[문제](https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function (n) {
  let count = n;

  return function () {
    return count++;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
```

## 2704. To Be Or Not To Be

[문제](https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @param {string} val
 * @return {Object}
 */
const expect = function (val) {
  return {
    toBe: (newVal) => {
      if (val === newVal) {
        return true;
      } else {
        throw 'Not Equal';
      }
    },
    notToBe: (newVal) => {
      if (val !== newVal) {
        return true;
      } else {
        throw 'Equal';
      }
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
```

## 2665. Counter II

[문제](https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = (init) => {
  let currentNum = init;

  const increment = () => {
    return ++currentNum;
  };

  const decrement = () => {
    return --currentNum;
  };

  const reset = () => {
    currentNum = init;
    return init;
  };

  return {
    increment,
    decrement,
    reset,
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
```
