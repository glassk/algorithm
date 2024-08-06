## 2723. Add Two Promises

[문제](https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async function (promise1, promise2) {
  return Promise.all([promise1, promise2]).then(
    ([result1, result2]) => result1 + result2
  );
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
```

## 2621. Sleep

[문제](https://leetcode.com/problems/sleep/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @param {number} millis
 * @return {Promise}
 */
function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
```

## 2715. Timeout Cancellation

[문제](https://leetcode.com/problems/timeout-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = function (fn, args, t) {
  const timer = setTimeout(() => fn(...args), t);

  return function () {
    clearTimeout(timer);
  };
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
```

## 2725. Interval Cancellation

[문제](https://leetcode.com/problems/interval-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = function (fn, args, t) {
  fn(...args);

  const timer = setInterval(() => fn(...args), t);

  return function () {
    clearInterval(timer);
  };
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)
 */
```

## 2637. Promise Time Limit

[문제](https://leetcode.com/problems/promise-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript)

Promise.race() 활용

```javascript
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
const timeLimit = function (fn, t) {
  return async function (...args) {
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject("Time Limit Exceeded"), t)
    );
    const fnPromise = fn(...args);
    return Promise.race([fnPromise, timeoutPromise]);
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
```

Promise 리턴

```javascript
const timeLimit = function (fn, t) {
  let timer;
  return async function (...args) {
    return new Promise((resolve, reject) => {
      timer = setTimeout(() => reject("Time Limit Exceeded"), t);

      fn(...args)
        .then((result) => {
          clearTimeout(timer);
          resolve(result);
        })
        .catch((error) => {
          clearTimeout(timer);
          reject(error);
        });
    });
  };
};
```

## 2622. Cache With Time Limit

[문제](https://leetcode.com/problems/cache-with-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
const TimeLimitedCache = function () {
  this.cache = new Map(); // key: { value, timer }
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const generateTimer = (key, duration) =>
    setTimeout(() => {
      this.cache.delete(key);
    }, duration);
  const hasKey = this.cache.has(key);

  if (hasKey) {
    clearTimeout(this.cache.get(key).timer);
  }

  this.cache.set(key, { value, timer: generateTimer(key, duration) });

  return hasKey;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  return this.cache.has(key) ? this.cache.get(key).value : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
```

## 2627. Debounce

[문제](https://leetcode.com/problems/debounce/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = function (fn, t) {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
```

## 2721. Execute Asynchronous Functions in Parallel

[문제](https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
const promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        const functionCount = functions.length;
        let isRejected = false;
        let resolvedCount = 0;

        functions.forEach((func, index) => {
            func()
                .then((result) => {
                    if (!isRejected) return;

                    results[index] = result;
                    resolvedCount++;
                    if (resolvedCount === functionCount) {
                        resolve(result);
                    }
                })
                .catch((error) => {
                    if (!isRejected) return;

                    isRejected = true;
                    reject(error);
                })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
```
