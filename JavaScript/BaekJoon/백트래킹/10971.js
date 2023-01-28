// 문제: https://www.acmicpc.net/problem/10971
// 참고: https://github.com/glassk/ALS/blob/main/Python/BaekJoon/%EC%99%84%EC%A0%84%ED%83%90%EC%83%89.md#10971-%EC%99%B8%ED%8C%90%EC%9B%90-%EB%AC%B8%EC%A0%9C-2
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const costs = input.slice(1).map((row) => row.split(' ').map((v) => +v));

function solution(n, costs) {
  let answer = Number.MAX_SAFE_INTEGER;

  function dfs(start, next, total, visited) {
    if (visited.length === n) {
      if (costs[next][start] !== 0)
        answer = Math.min(answer, total + costs[next][start]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (costs[next][i] === 0 || i === start || visited.includes(i)) continue;
      dfs(start, i, total + costs[next][i], [...visited, i]);
    }
  }

  for (let i = 0; i < n; i++) {
    dfs(i, i, 0, [i]); // 시작점, 다음, 비용 합계, 방문한 곳 배열
  }

  return answer;
}

console.log(solution(n, costs));
