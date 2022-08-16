// 문제: https://www.acmicpc.net/problem/1935
const fs = require('fs');
const fileName = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, exp, ...inputs] = fs
  .readFileSync(fileName)
  .toString()
  .trim()
  .split('\n');

const map = new Map();
let letter = 'A'.charCodeAt();
inputs.forEach((num) => {
  map.set(String.fromCharCode(letter), +num);
  letter += 1;
});

const stack = [];
let num1, num2;
exp.split('').forEach((v) => {
  if (/[A-Z]/.exec(v)) {
    stack.push(map.get(v));
  } else {
    num2 = stack.pop();
    num1 = stack.pop();
    switch (v) {
      case '+':
        stack.push(num1 + num2);
        break;
      case '-':
        stack.push(num1 - num2);
        break;
      case '*':
        stack.push(num1 * num2);
        break;
      case '/':
        stack.push(num1 / num2);
        break;
    }
  }
});
console.log(stack[0].toFixed(2));
