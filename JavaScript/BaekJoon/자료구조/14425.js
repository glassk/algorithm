// 문제: https://www.acmicpc.net/problem/14425
const fs = require('fs');
const fileName = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [nums, ...strings] = fs
  .readFileSync(fileName)
  .toString()
  .trim()
  .split('\n');

const [n, m] = nums.split(' ').map((v) => +v);
const set = new Set(strings.slice(0, n));
let answer = 0;
strings.slice(n).forEach((str) => {
  if (set.has(str)) answer++;
});
console.log(answer);
