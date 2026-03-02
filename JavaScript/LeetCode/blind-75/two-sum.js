// https://leetcode.com/problems/two-sum/?envType=problem-list-v2&envId=oizxjoit

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// O(n^2) time complexity, O(1) space complexity
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// O(n) time complexity, O(n) space complexity
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const need = target - value;
    if (map.has(need)) {
      return [map.get(need), i];
    }
    map.set(value, i);
  }
};
