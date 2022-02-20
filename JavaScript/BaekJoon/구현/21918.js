// 21918 전구
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const countArr = input[0].split(' ');
const commandCount = +countArr[1];
const bulbStateArr = input[1].split(' ').map((state) => +state);
const bulbInfoArr = [];
for (let i = 2; i < 2 + commandCount; i++) {
  const arr = input[i].split(' ').map((num) => +num);
  bulbInfoArr.push(arr);
}

const BULB_TURN_ON = 1;
const BULB_TURN_OFF = 0;

function solution(bulbStateArr, bulbInfoArr) {
  for (let bulbInfo of bulbInfoArr) {
    const [commandNum, x, y] = bulbInfo;
    switch (commandNum) {
      case 1:
        bulbStateArr[x - 1] = y;
        break;
      case 2:
        for (let i = x - 1; i < y; i++) {
          bulbStateArr[i] =
            bulbStateArr[i] === BULB_TURN_ON ? BULB_TURN_OFF : BULB_TURN_ON;
        }
        break;
      case 3:
        for (let i = x - 1; i < y; i++) {
          bulbStateArr[i] = BULB_TURN_OFF;
        }
        break;
      case 4:
        for (let i = x - 1; i < y; i++) {
          bulbStateArr[i] = BULB_TURN_ON;
        }
        break;
      default:
        break;
    }
  }

  console.log(bulbStateArr.join(' '));
}

solution(bulbStateArr, bulbInfoArr);
