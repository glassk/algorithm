// 20053 최소, 최대 2
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const textCaseArr = [];
for (let i = 2; i < input.length; i+=2 ) {
    const arr = input[i].split(' ').map((item) => +item);
    textCaseArr.push(arr);
}

function solution(textCaseArr) {
    for (let textcase of textCaseArr) {
        const maxNum = Math.max(...textcase);
        const minNum = Math.min(...textcase);
        console.log(minNum, maxNum);
    }
}

solution(textCaseArr);