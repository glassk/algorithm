// 3번 출석부
// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let n, k, s, t;
  const inputs = [];
  for await (const line of rl) {
    if (n) {
      inputs.push(line.split(' '));
      if (inputs.length === n) rl.close();
    } else {
      [n, k] = line.split(' ').map((v) => +v);
    }
  }
  console.log(solution(k, inputs));

  process.exit();
})();

function solution(k, arr) {
  arr.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    else if (a[0] < b[0]) return -1;
    else return +a[1] - +b[1];
  });

  return arr[k - 1].join(' ');
}

console.log(
  solution(1, [
    ['goorm', '110.40'],
    ['goormee', '111.50'],
    ['goormy', '109.50'],
    ['oscar', '100.00'],
    ['henry', '200.00'],
  ])
); // goorm 110.40
console.log(
  solution(5, [
    ['abcabc', '120.00'],
    ['abcabca', '120.00'],
    ['abcabcb', '120.00'],
    ['abcabcc', '120.00'],
    ['abcabcd', '120.00'],
  ])
); // abcabcd 120.00
