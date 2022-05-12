// 문제: https://level.goorm.io/exam/43059/%ED%8C%8C%EB%8F%84-%EC%84%BC%EC%84%9C/quiz/1
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on('line', function (line) {
  lines.push(line.split(' ').map((v) => +v));
}).on('close', function () {
  console.log(solution(lines));
  process.exit();
});

const solution = ([[x, y, r], ...sensors]) => {
  let answer = -1;
  let minDis = Number.MAX_SAFE_INTEGER;
  let len = sensors.length;

  for (let i = 0; i < len; i++) {
    const [sx, sy] = sensors[i];
    const xDiff = Math.abs(x - sx);
    const yDiff = Math.abs(y - sy);
    const distance = Math.sqrt(xDiff ** 2 + yDiff ** 2);
    if (xDiff <= r && yDiff <= r) {
      if (minDis > distance) {
        minDis = distance;
        answer = i + 1;
      }
    }
  }

  return answer;
};
