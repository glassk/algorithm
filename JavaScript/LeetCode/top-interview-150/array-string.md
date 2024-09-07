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

## 26. Remove Duplicates from Sorted Array

[문제](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150)

오름차순 정렬된 원본 배열에서 같은 수가 연속될 경우 중복을 제거한 후 고유한 값의 개수 리턴

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  if (nums.length === 1) {
    return 1;
  }

  const len = nums.length;
  let j = 1;

  for (let i = 1; i < len; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
};
```

## 80. Remove Duplicates from Sorted Array II

[문제](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150)

오름차순 정렬된 배열에서 중복 요소가 최대 두 번만 등장하도록 중복을 제거하는 문제

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  if (nums.length <= 2) {
    return nums.length;
  }

  let j = 2; // 고유한 값 채울 위치

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[j - 2]) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
};
```

## 189. Rotate Array

[문제](https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150)

원본 숫자 배열의 원소들을 k만큼 오른쪽으로 회전시키기
3가지 이상의 솔루션을 생각해보고, 공간복잡도가 O(1)로 해결해보기

다음 방법은 새로운 배열을 만들기 때문에 공간복잡도 O(n)

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  const len = nums.length;
  const move = k % len;

  const rotated = [...nums.slice(len - move), ...nums.slice(0, move + 1)];

  for (let i = 0; i < len; i++) {
    nums[i] = rotated[i];
  }
};
```
