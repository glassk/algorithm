// 1181 단어 정렬
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  solution(input.slice(1));
  process.exit();
});

// sort로만 구현(return -1은 오름차순)
function solution(arr) {
  const wordArr = Array.from(new Set([...arr]));
  wordArr.sort((a, b) => {
    if (a.length === b.length) {
      if (b > a) return -1;
    }
    return a.length - b.length;
  });

  wordArr.map((word) => console.log(word));
}

// 🤨 길이가 같은 문자열끼리 비교하는 부분 직접 구현
function solution(arr) {
  const wordArr = Array.from(new Set([...arr]));
  wordArr.sort((a, b) => a.length - b.length);

  let currentLength = wordArr[0].length;
  let tempArr = [];

  for (let i = 0; i < wordArr.length; i++) {
    const wordLength = wordArr[i].length;
    if (wordLength === currentLength) {
      tempArr.push(wordArr[i]);
    } else {
      tempArr.sort().map((word) => console.log(word));
      tempArr = [wordArr[i]];
      if (i === wordArr.length - 1) continue;
      currentLength = wordArr[i].length;
    }
  }
  if (tempArr.length) tempArr.sort().map((word) => console.log(word));
}
