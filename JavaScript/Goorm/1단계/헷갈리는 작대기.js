// 문제: https://level.goorm.io/exam/47882/%ED%97%B7%EA%B0%88%EB%A6%AC%EB%8A%94-%EC%9E%91%EB%8C%80%EA%B8%B0/quiz/1
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

const solution = (str) => {
  const countSeperator = (separator) => {
    return str.split(separator).length - 1;
  };

  for (let str of ['1', 'I', 'l', '|']) {
    console.log(countSeperator(str));
  }
};
