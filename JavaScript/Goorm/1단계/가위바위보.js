// 문제: https://level.goorm.io/exam/43056/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/quiz/1
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  solution(line);
  rl.close();
}).on('close', function () {
  process.exit();
});

const solution = (game) => {
  const choices = game.split(' ').map((v) => Number(v));
  const types = new Set(choices);
  const count = types.size;

  const getWinner = ([a, b]) => {
    if (a === 1 && b === 3) {
      return a;
    } else if (a === 1 && b === 2) {
      return b;
    } else if (a === 2 && b === 3) {
      return b;
    }
  };

  if (count === 1 || count === 3) {
    console.log(0);
  } else {
    const winner = getWinner([...types].sort((a, b) => a - b));
    console.log(choices.filter((v) => v === winner).length);
  }
};
