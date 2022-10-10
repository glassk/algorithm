// 1번 합격자 찾기
// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let count;
  const input = [];
  for await (const line of rl) {
    if (count) {
      input.push(line);
      if (input.length === count * 2) rl.close();
    } else {
      count = +line;
    }
  }
  const arr = input
    .filter((v, i) => i % 2 !== 0)
    .map((v) =>
      v
        .trim()
        .split(' ')
        .map((n) => +n)
    );
  console.log(solution(arr).join('\n'));

  process.exit();
})();

function solution(arr) {
  const answer = [];
  let count = 0;
  arr.forEach((scores) => {
    const len = scores.length;
    const sum = scores.reduce((acc, v) => acc + v, 0);
    const avg = sum / len;
    const count = scores.filter((v) => v >= avg).length;
    answer.push(`${count}/${len}`);
  });

  return answer;
}

console.log(solution([[1, 3, 7], [5]])); // [1/3, 1/1]
console.log(
  solution([
    [1, 2, 3, 4, 5],
    [1, 10, 10, 10],
  ])
); // [3/5, 3/4]
