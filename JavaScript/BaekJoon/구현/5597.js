// 5597 과제 안 내신 분..?
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const numArr = input.map((num) => +num);

function solution(numArr) {
  const checkSet = new Set(Array.from({ length: 30 }, (v, i) => i + 1));
  for (let num of numArr) {
    checkSet.delete(num);
  }

  const checkArr = [...checkSet];
  checkArr.sort((x, y) => x - y);
  for (let num of checkArr) {
    console.log(num);
  }
}

solution(numArr);
