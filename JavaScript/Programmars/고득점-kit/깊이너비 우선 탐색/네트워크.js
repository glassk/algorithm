function solution(n, computers) {
  const visited = Array.from({ length: n }, () => false);
  let answer = 0;

  function dfs(i) {
    visited[i] = true;

    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1 && !visited[j]) {
        dfs(j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // 2
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
); // 1
