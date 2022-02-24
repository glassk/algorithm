// 14467 소가 길을 건너간 이유 1
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const watchArr = [];
for (let i = 1; i < input.length; i++) {
  const arr = input[i].split(' ').map((item) => +item);
  watchArr.push(arr);
}

function solution(watchArr) {
  let posChangeNum = 0;
  const countMap = new Map();

  for (let watch of watchArr) {
    const [cowNum, cowPos] = watch;
    if (countMap.has(cowNum) && countMap.get(cowNum) !== cowPos) posChangeNum++;
    countMap.set(cowNum, cowPos);
  }

  return posChangeNum;
}

(() => console.log(solution(watchArr)))();
