function solution(nums) {
  const PICK_COUNT = 3;
  let answer = 0;
  const len = nums.length;

  const isPrime = (n) => {
    if (n === 1) return false;
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const dfs = (level, start, sum) => {
    if (level === PICK_COUNT) {
      if (isPrime(sum)) answer++;
    } else {
      for (let i = start; i < len; i++) {
        dfs(level + 1, i + 1, sum + nums[i]);
      }
    }
  };

  dfs(0, 0, 0);

  return answer;
}

console.log(solution([1, 2, 3, 4])); // 1
console.log(solution([1, 2, 7, 6, 4])); // 4
