function solution(nums) {
  const pickNum = Math.floor(nums.length / 2);

  return Math.min(new Set(nums).size, pickNum);
}

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
