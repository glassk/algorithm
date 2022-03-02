// 11720 숫자의 합
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// for문
function solution(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += +nums[i];
  }
  return total;
}

// reduce()
function solution(nums) {
  return nums.split('').reduce((acc, val) => acc + +val, 0);
}

console.log(solution(input[1]));
