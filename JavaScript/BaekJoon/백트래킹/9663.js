// 문제: https://www.acmicpc.net/problem/9663
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];

// N-Queen 문제
// 크기가 NxN인 체스판 위에 퀸 N개를 서로 공격할 수 없게 놓기
// 퀸을 놓는 방법의 수 구하기
function solution(n) {
  let count = 0;
  const queen = Array.from({ length: n }, () => 0);

  function check(row) {
    for (let i = 0; i < row; i++) {
      if (
        queen[i] === queen[row] ||
        Math.abs(queen[i] - queen[row]) === row - i
      )
        return false;
    }
    return true;
  }

  function dfs(row) {
    if (n === row) {
      count++;
      return;
    }

    for (let i = 0; i < n; i++) {
      queen[row] = i;
      if (check(row)) dfs(row + 1);
    }
  }

  dfs(0);

  return count;
}

console.log(solution(n));
