// 문제: https://www.acmicpc.net/problem/14712
// 참고: https://kjhoon0330.tistory.com/entry/BOJ-14712-%EB%84%B4%EB%AA%A8%EB%84%B4%EB%AA%A8-Python
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map((v) => +v);

function solution(n, m) {
  let answer = 0;
  const grid = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  function dfs(y, x) {
    if (x === 1 && y === n + 1) {
      answer++;
      return;
    }

    let newY, newX;
    if (x === m) {
      newX = 1;
      newY = y + 1;
    } else {
      newX = x + 1;
      newY = y;
    }

    dfs(newY, newX);

    if (
      grid[y - 1][x] === 0 ||
      grid[y - 1][x - 1] === 0 ||
      grid[y][x - 1] === 0
    ) {
      grid[y][x] = 1;
      dfs(newY, newX);
      grid[y][x] = 0;
    }
  }

  dfs(1, 1);

  return answer;
}

console.log(solution(n, m));
