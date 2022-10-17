// 4번 순환하는 수로 (미풀이))
// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let n;
  const input = [];
  for await (const line of rl) {
    if (n) {
      input.push(line.split(' ').map((v) => +v));
      if (input.length === n) rl.close();
    } else {
      n = +line;
    }
  }
  console.log(solution(n, input));

  process.exit();
})();

function solution(n, arr) {}
