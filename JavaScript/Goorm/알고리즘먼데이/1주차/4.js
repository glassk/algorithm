// 4번 소수 찾기
// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let n;
  for await (const line of rl) {
    if (n) {
      rl.close();
      console.log(
        solution(
          n,
          line.split(' ').map((v) => +v)
        )
      );
    } else {
      n = +line;
    }
  }

  process.exit();
})();

function solution(n, arr) {
  let answer = 0;
  let num;
  for (let i = 1; i <= n; i++) {
    num = arr[i - 1];
    if (isPrime(i)) {
      answer += num;
    }
  }

  return answer;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(solution(7, [1, 2, 3, 4, 5, 6, 7])); // 17
console.log(solution(12, [-46, 65, 13, 24, -25, 60, -39, 31, -21, -10, 69, 9])); // 83
