// 문제: https://www.acmicpc.net/problem/9012
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...inputs] = fs.readFileSync(filePath).toString().trim().split(/\s/);

const results = [];
inputs.forEach((input) => {
  results.push(solution(input));
});

function solution(input) {
  if (input.length % 2) return 'NO';

  const stack = [];
  for (let x of input) {
    if (x === '(') stack.push(x);
    else {
      if (stack.length !== 0) stack.pop();
      else return 'NO';
    }
  }
  return stack.length === 0 ? 'YES' : 'NO';
}

console.log(results.join('\n'));
