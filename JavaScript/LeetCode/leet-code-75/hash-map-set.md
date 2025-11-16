## Hash Map / Set

### [1207. Unique Number of Occurrences](https://leetcode.com/problems/unique-number-of-occurrences/?envType=study-plan-v2&envId=leetcode-75)

```javascript
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const numMap = new Map();

  arr.forEach((num) => {
    if (numMap.has(num)) {
      numMap.set(num, numMap.get(num) + 1);
    } else {
      numMap.set(num, 1);
    }
  });

  const values = numMap.values();

  return new Set(values).size === numMap.size;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurrences([1, 2])); // false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // true
```

### [1657. Determine if Two Strings Are Close](https://leetcode.com/problems/determine-if-two-strings-are-close/description/?envType=study-plan-v2&envId=leetcode-75)

```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  const map1 = new Map();
  const map2 = new Map();

  for (const letter of word1) {
    map1.set(letter, (map1.get(letter) || 0) + 1);
  }

  for (const letter of word2) {
    map2.set(letter, (map2.get(letter) || 0) + 1);
  }

  if (map1.size !== map2.size) return false;

  for (const key of map1.keys()) {
    if (!map2.has(key)) return false;
  }

  const counts1 = Array.from(map1.values()).sort((a, b) => a - b);
  const counts2 = Array.from(map2.values()).sort((a, b) => a - b);

  return counts1.every((count, index) => count === counts2[index]);
};

console.log(closeStrings('abc', 'bca')); // true
console.log(closeStrings('a', 'aa')); // false
console.log(closeStrings('cabbba', 'abbccc')); // true
```
