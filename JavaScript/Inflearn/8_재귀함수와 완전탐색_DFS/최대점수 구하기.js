function solution(m, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  const n = arr.length;

  function DFS(level, scoreSum, timeSum) {
    if (timeSum > m) return;

    if (level === n) {
      answer = Math.max(scoreSum, answer);
    } else {
      DFS(level + 1, scoreSum + arr[level][0], timeSum + arr[level][1]);
      DFS(level + 1, scoreSum, timeSum);
    }
  }

  DFS(0, 0, 0);

  return answer;
}

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
); // 41
