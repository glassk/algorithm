function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  function DFS(level, sum) {
    if (sum > c) return;

    if (level === n) {
      // answer = Math.max(answer, sum);
      if (answer < sum) {
        answer = sum;
      }
    } else {
      DFS(level + 1, sum + arr[level]);
      DFS(level + 1, sum);
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution(259, [81, 58, 42, 33, 61])); // 242
