function solution(m, arr) {
  const answer = [];
  const n = arr.length;
  const temp = Array.from({ length: m }, () => 0);
  const check = Array.from({ length: n }, () => 0);

  function DFS(level) {
    if (level === m) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp[level] = arr[i];
          DFS(level + 1);
          check[i] = 0;
        }
      }
    }
  }

  DFS(0);

  return answer;
}

console.log(solution(2, [3, 6, 9])); // [ [ 3, 6 ], [ 3, 9 ], [ 6, 3 ], [ 6, 9 ], [ 9, 3 ], [ 9, 6 ] ]
