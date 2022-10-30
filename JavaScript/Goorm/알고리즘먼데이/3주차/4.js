// 4번 순환하는 수로(어렵다)
// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let n;
  const input = [];
  for await (const line of rl) {
    if (n) {
      input.push(line.split(' ').map((v) => +v));
      if (input.length === n) rl.close();
    } else {
      n = +line;
    }
  }
  console.log(solution(n, input));

  process.exit();
})();

function solution(n, arr) {
  const graph = Array.from(Array(n + 1), () => []);
  for (const [u, v] of arr) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = Array.from({ length: n + 1 }, () => 0);
  const circle = [];
  let finded = -1;

  function dfs(u, tar) {
    if (visited[u] === 1) {
      finded = u;
      if (!(u in circle)) {
        circle.push(u);
      }
      return;
    }

    visited[u] = 1;

    for (const next of graph[u]) {
      if (next === tar) {
        continue;
      }
      dfs(next, u);

      if (finded === -2) {
        return;
      }

      if (finded === u) {
        finded = -2;
        return;
      }

      if (finded >= 0) {
        if (!(u in circle)) {
          circle.push(u);
        }
        return;
      }
    }
  }

  dfs(1, 1);
  circle.sort((a, b) => a - b);
  return circle.length + '\n' + circle.join(' ');
}

console.log(
  solution(5, [
    [5, 2],
    [2, 4],
    [4, 3],
    [3, 1],
    [1, 2],
  ])
); // 4 \n 1 2 3 4
console.log(
  solution(6, [
    [1, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 2],
    [1, 5],
  ])
); // 4 \n 1 3 4 5
console.log(
  solution(5, [
    [2, 5],
    [3, 5],
    [3, 1],
    [1, 4],
    [4, 5],
  ])
); // 4 \n 1 3 4 5
