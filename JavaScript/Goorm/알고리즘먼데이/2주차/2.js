// 2번 철자 분리 집합
// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  const inputs = [];
  for await (const line of rl) {
    inputs.push(line);
    if (inputs.length === 2) {
      rl.close();
    }
  }
  const [n, s] = inputs;
  console.log(solution(n, s));

  process.exit();
})();

function solution(n, str) {
  let answer = 1;
  let temp = str[0];
  for (let i = 1; i < n; i++) {
    if (str[i] !== temp) {
      answer++;
      temp = str[i];
    }
  }

  return answer;
}

console.log(5, 'goorm'); // 4
console.log(9, 'algorithm'); // 9
