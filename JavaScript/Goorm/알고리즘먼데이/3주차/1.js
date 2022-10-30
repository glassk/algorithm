// 1번 0커플
// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  const input = [];
  for await (const line of rl) {
    if (input.length) {
      input.push(line.split(' ').map((v) => +v));
      rl.close();
    } else {
      input.push(+line);
    }
  }

  console.log(solution(...input));
  process.exit();
})();

// 점수 총합 이용
function solution(arr) {
  return arr.reduce((acc, v) => acc + v, 0);
}

console.log(solution(8, [1, 2, 3, 4, -1, -2, -3, -5])); // -1
console.log(solution(8, [-1, 1, 2, -2, 3, -3, 4, 5])); // 9
