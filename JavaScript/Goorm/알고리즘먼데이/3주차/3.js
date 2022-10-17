// 3번 구름이의 여행 (일부 케이스 오답)
// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let n, m, k;
  const input = [];
  for await (const line of rl) {
    if (m) {
      input.push(line.split(' ').map((v) => +v));
      if (input.length === m) rl.close();
    } else {
      [n, m, k] = line.split(' ').map((v) => +v);
    }
  }
  console.log(solution(n, m, k, input));

  process.exit();
})();

// n 섬의 개수, m 다리의 개수, k 최대 다리 개수, 다리가 잇는 두 섬의 번호 arr (u v)
// 1번 섬에서 N번 섬으로 가려고 하는데 통과하는 다리 개수가 K개 이하여야 함
function solution(n, m, k, arr) {
  let answer = false;
  const graph = Array.from(Array(n + 1), () => Array());
  const check = Array.from({ length: n + 1 }, () => 0);
  arr.forEach(([u, v]) => graph[u].push(v));
  let count = 0;

  function dfs(v) {
    if (count > k) return;
    if (v === n) {
      if (count <= k) {
        answer = true;
        return;
      }
    } else {
      const len = graph[v].length;
      for (let i = 0; i < len; i++) {
        if (check[graph[v][i]] === 0) {
          check[graph[v][i]] = 1;
          count++;
          dfs(graph[v][i]);
          check[graph[v][i]] = 0;
          count--;
        }
      }
    }
  }

  check[1] = 1;
  dfs(1);

  return answer ? 'YES' : 'NO';
}

console.log(
  solution(6, 6, 2, [
    [1, 4],
    [4, 2],
    [2, 6],
    [4, 3],
    [1, 2],
    [3, 1],
  ])
); // YES
console.log(
  solution(6, 6, 2, [
    [1, 2],
    [2, 3],
    [3, 4],
    [3, 5],
    [5, 6],
    [5, 2],
  ])
); // NO
console.log(solution(3, 3, 1, [[1, 2]])); // NO
