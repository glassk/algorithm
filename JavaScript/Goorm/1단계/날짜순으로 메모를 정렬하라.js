// 문제: https://level.goorm.io/exam/43062/%EB%82%A0%EC%A7%9C%EC%88%9C%EC%9C%BC%EB%A1%9C-%EB%A9%94%EB%AA%A8%EB%A5%BC-%EC%A0%95%EB%A0%AC%ED%95%98%EB%9D%BC/quiz/1
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];
rl.on('line', function (line) {
  if (line === 'END') rl.close();
  inputs.push(line);
}).on('close', function () {
  solution(inputs);
  process.exit();
});

const solution = (memos) => {
  const format1 = /[0-9]+\/[0-9]+\/[0-9]+/;
  const format2 = /[0-9]+-[0-9]+-[0-9]+/;
  const format3 = /[0-9]+년[0-9]+월[0-9]+일/;

  const formatDigit = (numStr) => {
    if (+numStr < 10) {
      if (numStr.length === 2) return numStr[1];
      else return numStr[0];
    } else return numStr;
  };

  const convertToDate = ([y, m, d]) => {
    const year = y.length === 2 ? `20${y}` : y;
    const month = formatDigit(m);
    const day = formatDigit(d);
    return [+year, +month, +day];
  };

  const findDate = (format, sep, str) => {
    if (str.match(format)) {
      return convertToDate(str.match(format)[0].split(sep));
    } else return null;
  };

  const result = [];
  for (let i = 0; i < memos.length; i++) {
    const date1 = findDate(format1, '/', memos[i]);
    const date2 = findDate(format2, '-', memos[i]);
    const date3 = findDate(format3, /[년월일]/g, memos[i]);
    for (let date of [date1, date2, date3]) {
      if (date) result.push([i, ...date]);
    }
  }

  result.sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[2] === b[2]) return a[3] - b[3];
      else return a[2] - b[2];
    } else return a[1] - b[1];
  });

  result.forEach((res) => {
    console.log(memos[res[0]]);
  });
};
