## 88. Merge Sorted Array

[문제](https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150)

Array.splice() 활용. 시간 복잡도는 O(m+n)이지만 공간 복잡도는 새로운 배열을 활용하므로 O(m+n)가 된다.
성능 측면에서도 splice()가 불리하다.

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  if (nums2.length === 0) return;
  if (nums1.length === 0) {
    nums1.splice(0, m + n, ...nums2);
    return;
  }

  const result = [];
  let index1 = 0,
    index2 = 0;
  nums1.splice(m, nums1.length - m);

  while (index1 < m && index2 < n) {
    if (nums1[index1] < nums2[index2]) {
      result.push(nums1[index1++]);
    } else if (nums1[index1] === nums2[index2]) {
      result.push(nums1[index1++]);
      result.push(nums2[index2++]);
    } else {
      result.push(nums2[index2++]);
    }
  }

  if (index1 < m) {
    result.push(...nums1.slice(index1));
  } else if (index2 < n) {
    result.push(...nums2.slice(index2));
  }

  nums1.splice(0, m + n, ...result);
};
```

nums1 배열 내부에서 병합하므로 공간 복잡도는 O(1)이다.

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  if (nums2.length === 0) return;

  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};
```

## 27. Remove Element

[문제](https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150)

val과 같지 않으면 유효한 요소를 저장할 위치(position)에 저장, position 업데이트

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let position = 0;

  for (let current = 0; current < nums.length; current++) {
    if (nums[current] !== val) {
      nums[position++] = nums[current];
    }
  }

  return position;
};
```

투 포인터 알고리즘은 포인터의 역할을 read와 write로 나눠서 접근하자.

- read 포인터: 배열을 순회하며 요소를 읽어들이고 조건에 맞는지 검사함
- write 포인터: read 포인터가 조건에 맞다고 판단한 요소를 써 넣음
