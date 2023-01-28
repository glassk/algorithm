// 문제: https://www.acmicpc.net/problem/6443
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const words = input.slice(1);

// 입력받은 영단어의 철자들로 만들 수 있는 모든 단어 출력
// 같은 단어 중복x, 알파벳 순서로 출력
function solution(words) {
  const alphaCount = 26;
  const lowerStart = 97;
  let answer = '';
  let letters, len;

  function dfs(str) {
    if (str.length === len) {
      answer += str + '\n';
      return;
    }
    for (let i = 0; i < alphaCount; i++) {
      if (!letters[i]) continue;
      letters[i] -= 1;
      dfs(str + String.fromCharCode(i + lowerStart));
      letters[i] += 1;
    }
  }

  for (const word of words) {
    len = word.length;
    letters = Array.from({ length: alphaCount }, () => 0);
    for (const letter of word) {
      letters[letter.charCodeAt() - lowerStart] += 1;
    }
    dfs('');
  }

  return answer.trim();
}

console.log(solution(words));
