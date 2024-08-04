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
