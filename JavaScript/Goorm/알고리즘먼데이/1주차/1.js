// 1번 경로의 개수 (오답)
// 복습) 큰 수를 처리하기 위해 문자열과 배열, 혹은 BigInteger 구조체 선언이 필요함
// JavaScript에서는 BigInt 객체와 toString()로 해결 가능

// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let count = 0;
  for await (const line of rl) {
    if (++count === 2) {
      rl.close();
      console.log(solution(line.split(' ').map((v) => +v)));
    }
  }

  process.exit();
})();

// 1. for문
function solution(bridges) {
  let answer = BigInt(1);
  for (let x of bridges) {
    answer *= BigInt(x);
  }
  return answer.toString(10);
}

// 2. reduce()
function solution(bridges) {
  return bridges.reduce((acc, v) => acc * BigInt(v), BigInt(1)).toString(10);
}

console.log(solution(3, [2, 3, 2])); // 12
console.log(solution(3, [3, 3, 3])); // 27
console.log(solution(7, [100, 100, 100, 100, 100, 100, 100])); // 100000000000000
