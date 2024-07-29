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
