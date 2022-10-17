// 2번 폴더 폰 자판
// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  const input = [];
  for await (const line of rl) {
    input.push(line);
    if (input.length === 2) rl.close();
  }
  console.log(solution(+input[0], input[1]));
  process.exit();
})();

function solution(n, s) {
  const keyboard = [
    [1, '.', ',', '?', '!'],
    [2, 'A', 'B', 'C'],
    [3, 'D', 'E', 'F'],
    [4, 'G', 'H', 'I'],
    [5, 'J', 'K', 'L'],
    [6, 'M', 'N', 'O'],
    [7, 'P', 'Q', 'R', 'S'],
    [8, 'T', 'U', 'V'],
    [9, 'W', 'X', 'Y', 'Z'],
  ];
  const key = (num, count) =>
    keyboard[num - 1][(count - 1) % keyboard[num - 1].length];

  let num = s[0];
  let count = 1;
  let answer = '';
  for (let i = 1; i < n; i++) {
    if (s[i] === num) {
      count++;
    } else {
      answer += key(+num, count);
      num = s[i];
      count = 1;
    }
  }
  answer += key(+num, count);

  return answer;
}

console.log(solution(2, '11')); // .
console.log(solution(14, '44433355556666')); // HELO
