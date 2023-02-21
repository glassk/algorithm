// 2667 단지번호붙이기 https://www.acmicpc.net/problem/2667
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const map = input.slice(1).map((row) => row.split('').map(Number));

solution(n, map);

// 좌우 또는 상하로 연결된 단지 수와 각 단지에 속하는 집의 수 출력
function solution(n, map) {
  const answer = [];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let nextX, nextY, count;

  function dfs(row, col) {
    for (let i = 0; i < 4; i++) {
      nextX = row + dx[i];
      nextY = col + dy[i];
      if (
        nextX >= 0 &&
        nextX < n &&
        nextY >= 0 &&
        nextY < n &&
        map[nextX][nextY] === 1
      ) {
        map[nextX][nextY] = 0;
        count++;
        dfs(nextX, nextY);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === 1) {
        count = 1;
        map[i][j] = 0;
        dfs(i, j);
        answer.push(count);
      }
    }
  }

  console.log(answer.length);
  console.log(
    answer
      .sort((a, b) => a - b)
      .join('\n')
      .trim()
  );
}
