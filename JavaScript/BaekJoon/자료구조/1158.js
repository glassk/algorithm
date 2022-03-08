// 1158 요세푸스 문제
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
rl.on('line', (line) => {
  input = line.split(' ').map((num) => +num);
}).on('close', () => {
  solution(input[0], input[1]);
  process.exit();
});

function solution(n, k) {
  const arr = Array.from({ length: n }, (v, i) => i + 1);
  const answer = [];

  let count = 0;
  while (arr.length > 0) {
    count++;
    if (count === k) {
      answer.push(arr.shift());
      count = 0;
    } else {
      arr.push(arr.shift());
    }
  }

  answer.push(...arr);

  console.log('<' + answer.join(', ') + '>');
}
