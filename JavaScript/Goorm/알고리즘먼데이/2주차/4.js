// 4번 폭탄 구현하기
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let n, k;
  const inputs = [];
  for await (const line of rl) {
    if (k) {
      inputs.push(line.split(' ').map((v) => +v));
      if (inputs.length === k) rl.close();
    } else {
      [n, k] = line.split(' ').map((v) => +v);
    }
  }
  console.log(solution(n, inputs));

  process.exit();
})();

function solution(n, arr) {
  const board = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  const dy = [-1, 0, 0, 0, 1];
  const dx = [0, -1, 0, 1, 0];
  arr.forEach(([row, col]) => {
    for (let i = 0; i < 5; i++) {
      const y = row + dy[i];
      const x = col + dx[i];
      if (x >= 1 && x <= n && y >= 1 && y <= n) {
        board[y][x]++;
      }
    }
  });

  let answer = 0;
  board.forEach((row) => {
    answer += row.reduce((acc, v) => acc + v, 0);
  });

  return answer;
}

console.log(
  solution(3, [
    [3, 3],
    [3, 3],
    [1, 1],
  ])
); // 9
console.log(
  solution(4, [
    [1, 1],
    [4, 4],
    [3, 3],
    [2, 4],
  ])
); // 15
