function solution(n, m) {
  const answer = [];
  const temp = Array.from({ length: m }, () => 0);

  function DFS(level) {
    if (level === m) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        temp[level] = i;
        DFS(level + 1);
      }
    }
  }

  DFS(0);

  return answer;
}

console.log(solution(3, 2));
/**
[
  [ 0, 0 ], [ 0, 1 ],
  [ 0, 2 ], [ 1, 0 ],
  [ 1, 1 ], [ 1, 2 ],
  [ 2, 0 ], [ 2, 1 ],
  [ 2, 2 ]
]
 */
