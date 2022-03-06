// 4659 비밀번호 발음하기
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
  if (line === 'end') rl.close();
  input.push(line);
}).on('close', () => {
  solution(input);
  process.exit();
});

function isHighQualityPassword(password) {
  const includeVowel = /[aeiou]+/;
  const tripleLetter = /[^aeiou]{3}|[aeiou]{3}/;
  const doubleLetter =
    /aa|bb|cc|dd|ff|gg|hh|ii|jj|kk|ll|mm|nn|pp|qq|rr|ss|tt|uu|vv|ww|xx|yy|zz/;

  if (!includeVowel.test(password)) return false;

  if (tripleLetter.test(password)) return false;

  if (doubleLetter.test(password)) return false;

  // 같은 글자 연속 2번 오는지 확인(정규식 X)
  //   for (let i = 0; i < password.length - 1; i++) {
  //     const [left, right] = password.slice(i, i + 2);
  //     if (left === right && left !== 'e' && left !== 'o') return false;
  //   }

  return true;
}

function solution(passwordArr) {
  for (let password of passwordArr) {
    if (isHighQualityPassword(password))
      console.log(`<${password}> is acceptable.`);
    else console.log(`<${password}> is not acceptable.`);
  }
}
