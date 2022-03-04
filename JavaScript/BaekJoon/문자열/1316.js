// 1316 그룹 단어 체커
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const wordCount = +input[0];
const wordArr = [];
for (let i = 1; i <= wordCount; i++) {
  wordArr.push(input[i]);
}

function isGroupWord(word) {
  const letterSet = new Set(word.split(''));

  if (letterSet.size === word.length) return true;

  for (let letter of letterSet) {
    const letterCount = word.split(letter).length - 1;
    if (letterCount === 1) continue;

    const startIndex = word.indexOf(letter);
    if (
      word.slice(startIndex, startIndex + letterCount) !==
      letter.repeat(letterCount)
    )
      return false;
  }

  return true;
}

function solution(wordArr) {
  let answer = 0;

  for (let word of wordArr) {
    if (isGroupWord(word)) answer++;
  }

  return answer;
}

console.log(solution(wordArr));

// 다른 풀이: 새로운 배열 push, 마지막 원소 비교
function isGroupWord(word) {
  const record = [];

  for (let i = 0; i < word.length; i++) {
    if (record.indexOf(word[i]) === -1) {
      record.push(word[i]);
    } else {
      if (record[record.length - 1] !== word[i]) return false;
    }
  }

  return true;
}
