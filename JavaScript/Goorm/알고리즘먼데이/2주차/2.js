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

// 다른 풀이: i번째 철자가 그 다음 철자와 동일하지 않으면 집합 분리
function solution(n, str) {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (str[i + 1] === str[i]) continue;
    else answer++;
  }

  return answer;
}

console.log(solution(5, 'goorm')); // 4
console.log(solution(9, 'algorithm')); // 9
