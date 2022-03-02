// 11365 !밀비 급일
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  if (line === 'END') rl.close();
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});

function solution(strArr) {
  for (let str of strArr) {
    console.log(str.split('').reverse().join(''));
  }
}

solution(input);
