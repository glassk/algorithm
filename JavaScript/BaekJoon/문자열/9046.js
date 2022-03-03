// 9046 복호화
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input.slice(1));
  process.exit();
});

function solution(sentenceArr) {
  for (let sentence of sentenceArr) {
    const countMap = new Map();
    let mostLetter;
    for (let letter of sentence.replace(/ /g, '')) {
      if (!countMap.has(letter)) countMap.set(letter, 1);
      else countMap.set(letter, countMap.get(letter) + 1);
    }

    const mostCount = [...countMap.entries()].reduce((a, b) =>
      a[1] > b[1] ? a : b
    );

    mostLetter = mostCount[0];

    for (let [letter, count] of countMap) {
      if (letter !== mostCount[0] && count === mostCount[1]) {
        mostLetter = '?';
        break;
      }
    }

    console.log(mostLetter);
  }
}
