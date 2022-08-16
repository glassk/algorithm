// 문제: https://www.acmicpc.net/problem/10799
const fs = require('fs');
const fileName = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(fileName).toString().trim();

const stack = [];
let answer = 0;
const len = input.length;
for (let i = 0; i < len; i++) {
  if (input[i] === '(') {
    stack.push('(');
  } else {
    stack.pop();
    // 직전 괄호가 여는 괄호이면 스택 길이 더하기
    if (input[i - 1] === '(') answer += stack.length;
    else answer++;
  }
}

console.log(answer);
