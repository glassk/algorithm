function solution(arr, m) {
  let answer = Number.MAX_SAFE_INTEGER;
  const n = arr.length;

  function DFS(level, sum) {
    if (level >= answer || sum > m) return;

    if (sum === m) {
      answer = Math.min(answer, level);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(level + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution([1, 2, 5], 15)); // 3
