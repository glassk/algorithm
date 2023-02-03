// 11660 구간 합 구하기 5 https://www.acmicpc.net/problem/11660
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map((v) => +v);
const table = input.slice(1, 1 + n).map((row) => row.split(' ').map((v) => +v));
const operations = input
  .slice(1 + n)
  .map((row) => row.split(' ').map((v) => +v - 1));

console.log(solution(n, table, operations));

// (x1, y1)부터 (x2, y2)까지 합 구하기
// (x, y)는 x행 y열
function solution(n, table, operations) {
  let answer = '';

  const sum = table.map((row) => row.slice());

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;

      if (i === 0) {
        sum[i][j] += sum[i][j - 1];
      } else if (j === 0) {
        sum[i][j] += sum[i - 1][j];
      } else {
        sum[i][j] += sum[i][j - 1] + sum[i - 1][j] - sum[i - 1][j - 1];
      }
    }
  }

  for (const [x1, y1, x2, y2] of operations) {
    answer +=
      sum[x2][y2] -
      (x1 > 0 ? sum[x1 - 1][y2] : 0) -
      (y1 > 0 ? sum[x2][y1 - 1] : 0) +
      (x1 > 0 && y1 > 0 ? sum[x1 - 1][y1 - 1] : 0) +
      '\n';
  }

  return answer.trim();
}
