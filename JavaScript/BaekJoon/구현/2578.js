// 2578 빙고
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

function setArr(data, start, end) {
  const arr = [];
  for (let i = start; i < end; i++) {
    const tempArr = data[i].split(' ').map((item) => +item);
    arr.push(tempArr);
  }
  return arr;
}

const bingoArr = setArr(input, 0, 5);
const numArr = setArr(input, 5, 10);

function countBingo(arr) {
  let bingoCount = 0;
  const arrLen = arr.length;

  for (let i = 0; i < arrLen; i++) {
    let rowCount = 0;
    let colCount = 0;
    for (let j = 0; j < arrLen; j++) {
      if (arr[i][j]) colCount++;
      if (arr[j][i]) rowCount++;
    }
    if (rowCount === 0) bingoCount++;
    if (colCount === 0) bingoCount++;
  }

  let leftCrossCount = 0;
  let rightCrossCount = 0;
  for (let i = 0; i < arrLen; i++) {
    if (arr[i][i]) leftCrossCount++;
    if (arr[i][arrLen - i - 1]) rightCrossCount++;
  }
  if (leftCrossCount === 0) bingoCount++;
  if (rightCrossCount === 0) bingoCount++;

  return bingoCount;
}

function solution(bingoArr, numArr) {
  let countNum = 0;
  for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j < numArr.length; j++) {
      for (let k = 0; k < bingoArr.length; k++) {
        const hit = bingoArr[k].indexOf(numArr[i][j]);
        if (hit === -1) continue;
        bingoArr[k][hit] = 0;
      }

      countNum++;
      if (countBingo(bingoArr) >= 3) return countNum;
    }
  }
}

(() => {
  console.log(solution(bingoArr, numArr));
})();
