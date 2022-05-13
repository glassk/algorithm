// 문제: https://level.goorm.io/exam/47880/%EB%B6%80%EB%B6%84-%ED%8C%B0%EB%A6%B0%EB%93%9C%EB%A1%AC-%EB%AC%B8%EC%9E%90%EC%97%B4/quiz/1
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(solution(line));
  rl.close();
}).on('close', function () {
  process.exit();
});

const solution = (str) => {
  const isPalindrome = (str) => {
    const strLen = str.length;
    for (let i = 0; i < Math.floor(strLen / 2); i++) {
      if (str[i] !== str[strLen - i - 1]) return false;
    }
    return true;
  };

  let maxLen = 0;
  const len = str.length;
  for (let strLen = len; strLen > 0; strLen--) {
    for (let i = 0; i <= len - strLen; i++) {
      const substring = str.substr(i, strLen);
      if (isPalindrome(substring)) {
        maxLen = Math.max(strLen, maxLen);
      }
    }
  }

  return maxLen;
};
