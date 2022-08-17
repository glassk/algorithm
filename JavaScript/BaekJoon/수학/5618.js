// 문제: https://www.acmicpc.net/problem/5618
const fs = require('fs');
const fileName = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, inputs] = fs.readFileSync(fileName).toString().split('\n');

const nums = inputs.split(' ').map((v) => +v);
const min = Math.min(...nums);
const results = [];
for (let divisor = 1; divisor <= min; divisor++) {
  let flag = true;
  for (let num of nums) {
    if (num % divisor !== 0) {
      flag = false;
      break;
    }
  }
  if (flag) results.push(divisor);
}
console.log(results.join('\n'));
