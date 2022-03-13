// 1620 나는야 포켓몬 마스터 이다솜
// 시간 초과
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const [n, m] = input[0].split(' ').map((num) => +num);
  solution(input.slice(1, n + 1), input.slice(n + 1));
  process.exit();
});

function solution(nameArr, questionArr) {
  for (let question of questionArr) {
    if (isNaN(question)) {
      console.log(nameArr.indexOf(question) + 1);
    } else {
      console.log(nameArr[question - 1]);
    }
  }
}

// 이름과 번호 저장하는 Map 구현, console.log 한번만 실행
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ');

const nameMap = new Map();
const numMap = new Map();
for (let i = 0; i < N; i++) {
  nameMap.set(i + 1, input[i]);
  numMap.set(input[i], i + 1);
}

let answer = '';
for (let i = N; i < input.length; i++) {
  if (isNaN(input[i])) {
    answer += numMap.get(input[i]) + '\n';
  } else {
    answer += nameMap.get(+input[i]) + '\n';
  }
}
console.log(answer);
