// 11728 배열 합치기
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
  input.push(line.split(' ').map((num) => +num));
}).on('close', () => {
  solution(input[1], input[2]);
  process.exit();
});

function solution(arrA, arrB) {
  let pointerA = 0,
    pointerB = 0;
  const answer = [];

  while (pointerA < arrA.length && pointerB < arrB.length) {
    if (arrA[pointerA] <= arrB[pointerB]) {
      answer.push(arrA[pointerA++]);
    } else {
      answer.push(arrB[pointerB++]);
    }
  }

  while (pointerA < arrA.length) answer.push(arrA[pointerA++]);
  while (pointerB < arrB.length) answer.push(arrB[pointerB++]);

  console.log(answer.join(' '));
}
