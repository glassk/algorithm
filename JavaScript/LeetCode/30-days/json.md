## 2677. Chunk Array

[문제](https://leetcode.com/problems/chunk-array/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = function (arr, size) {
  const arrLen = arr.length;

  if (arrLen === 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i < arrLen; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
};
```

## 2619. Array Prototype Last

[문제](https://leetcode.com/problems/array-prototype-last/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
```

## 2631. Group By

[문제](https://leetcode.com/problems/group-by/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, item) => {
    const key = fn(item);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
```

## 2724. Sort By

[문제](https://leetcode.com/problems/sort-by/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};
```

## 2722. Join Two Arrays by ID

[문제](https://leetcode.com/problems/join-two-arrays-by-id/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
const join = function (arr1, arr2) {
  const map = new Map();

  arr1.forEach((element) => {
    map.set(element.id, element);
  });

  arr2.forEach((element) => {
    if (map.has(element.id)) {
      map.set(element.id, { ...map.get(element.id), ...element });
    } else {
      map.set(element.id, element);
    }
  });

  return Array.from(map.values()).sort((a, b) => a.id - b.id);
};
```
