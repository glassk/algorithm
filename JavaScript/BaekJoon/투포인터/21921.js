// 21912 블로그
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
  input.push(line.split(' ').map((num) => +num));
}).on('close', () => {
  solution(input[0][1], input[1]);
  process.exit();
});

function solution(period, visitorArr) {
  if (visitorArr.reduce((acc, v) => acc + v) === 0) {
    console.log('SAD');
    return;
  }

  let periodVisitor = visitorArr.slice(0, period).reduce((acc, v) => acc + v);

  let maxVisitor = periodVisitor;
  let periodCount = 1;

  for (let i = period; i < visitorArr.length; i++) {
    periodVisitor += visitorArr[i] - visitorArr[i - period];

    if (periodVisitor > maxVisitor) {
      maxVisitor = periodVisitor;
      periodCount = 1;
    } else if (periodVisitor === maxVisitor) {
      periodCount++;
    }
  }

  console.log(maxVisitor);
  console.log(periodCount);
}
