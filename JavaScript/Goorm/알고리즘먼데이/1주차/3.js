// 3번 최장 맨해튼 거리
function solution(nums) {
  let max = Number.MIN_SAFE_INTEGER;
  let dist, rest;
  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      const set = new Set([0, 1, 2, 3]);
      set.delete(i);
      set.delete(j);
      dist = Math.abs(nums[i] - nums[j]);
      [y1, y2] = Array.from(set);
      dist += Math.abs(nums[y1] - nums[y2]);

      max = Math.max(max, dist);
    }
  }

  return max;
}

console.log(solution([1, 3, 5, 10])); // 11
console.log(solution([-1, -3, 5, -10])); // 17
