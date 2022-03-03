// 10798 세로읽기
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  solution(input);
  process.exit();
});

function solution(wordArr) {
  const letterArr = [];
  let maxWordLength = 0;
  for (let word of wordArr) {
    letterArr.push(word.split(''));
    if (word.length > maxWordLength) maxWordLength = word.length;
  }

  let readOrder = '';
  for (let i = 0; i < maxWordLength; i++) {
    for (let letter of letterArr) {
      if (letter.length <= i) continue;
      readOrder += letter[i];
    }
  }

  console.log(readOrder);
}
