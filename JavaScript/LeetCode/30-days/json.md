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

## 2625. Flatten Deeply Nested Array

[문제](https://leetcode.com/problems/flatten-deeply-nested-array/description/?envType=study-plan-v2&envId=30-days-of-javascript)

```javascript
/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
const flat = function (arr, n) {
  const result = [];

  const flattenArr = (element, depth) => {
    if (depth === n) {
      result.push(element);
      return;
    }

    if (Array.isArray(element)) {
      element.forEach((subElement) => {
        flattenArr(subElement, depth + 1);
      });
    } else {
      result.push(element);
    }
  };

  arr.forEach((element) => flattenArr(element, 0));

  return result;
};
```

## 2705. Compact Object

[문제](https://leetcode.com/problems/compact-object/description/?envType=study-plan-v2&envId=30-days-of-javascript)

reduce 미활용, 적은 메모리 사용량

```javascript
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
const compactObject = function (obj) {
  const excludeFalsyFromArray = (arr) => {
    const result = [];
    arr.forEach((element) => {
      if (!element) return;
      if (Array.isArray(element)) {
        result.push(excludeFalsyFromArray(element));
      } else if (typeof element === 'object') {
        result.push(excludeFalsyFromObject(element));
      } else {
        result.push(element);
      }
    });
    return result;
  };

  const excludeFalsyFromObject = (obj) => {
    const result = {};
    Object.entries(obj).forEach(([key, value]) => {
      if (!value) return;
      if (Array.isArray(value)) {
        result[key] = excludeFalsyFromArray(value);
      } else if (typeof value === 'object') {
        result[key] = excludeFalsyFromObject(value);
      } else {
        result[key] = value;
      }
    });
    return result;
  };

  if (Array.isArray(obj)) {
    return excludeFalsyFromArray(obj);
  } else {
    return excludeFalsyFromObject(obj);
  }
};
```

reduce 활용

```javascript
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
const compactObject = function (obj) {
  const isNotNullObject = (obj) => obj !== null && typeof obj === 'object';
  const isValidCompactedValue = (obj) =>
    Object.keys(obj).length >= 0 || Array.isArray(obj);
  let compactedValue;

  if (Array.isArray(obj)) {
    return obj.reduce((acc, item) => {
      if (isNotNullObject(item)) {
        compactedValue = compactObject(item);
        if (isValidCompactedValue(compactedValue)) {
          acc.push(compactedValue);
        }
      } else if (item) {
        acc.push(item);
      }
      return acc;
    }, []);
  } else if (isNotNullObject(obj)) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (isNotNullObject(value)) {
        compactedValue = compactObject(value);
        if (isValidCompactedValue(compactedValue)) {
          acc[key] = compactedValue;
        }
      } else if (value) {
        acc[key] = value;
      }
      return acc;
    }, {});
  }

  return obj;
};
```
