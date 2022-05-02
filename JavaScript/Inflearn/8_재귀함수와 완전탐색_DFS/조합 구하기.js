function solution(n, m) {
  const answer = [];
  const temp = Array.from({ length: m }, () => 0);

  function DFS(level, startNum) {
    if (level === m) {
      answer.push(temp.slice());
    } else {
      for (let i = startNum; i <= n; i++) {
        temp[level] = i;
        DFS(level + 1, i + 1);
      }
    }
  }

  DFS(0, 1);

  return answer;
}

console.log(solution(4, 2)); // [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
