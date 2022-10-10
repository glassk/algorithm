// 2번 동명이인
// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let count, name;
  const arr = [];
  for await (const line of rl) {
    if (count) {
      arr.push(line);
      if (arr.length === count) rl.close();
    } else {
      [count, name] = line.split(' ');
      count = +count;
    }
  }

  console.log(solution(name, arr));

  process.exit();
})();

function solution(name, arr) {
  let answer = 0;
  arr.forEach((v) => {
    if (new RegExp(name).test(v)) {
      answer++;
    }
  });

  return answer;
}

console.log(solution('fred', ['sam', 'fredy', 'fredi', 'ilium'])); // 2
console.log(solution('dalgu', ['dalgu', 'benjamin', 'oscar', 'goormee'])); // 1
