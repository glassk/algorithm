// 문제: https://www.acmicpc.net/problem/14888
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const nums = input[1].split(' ').map((v) => +v);
const counts = input[2].split(' ').map((v) => +v);

function solution(n, nums, counts) {
  const operators = [
    {
      op: '+',
      count: counts[0],
      cal: (a, b) => a + b,
    },
    {
      op: '-',
      count: counts[1],
      cal: (a, b) => a - b,
    },
    {
      op: '*',
      count: counts[2],
      cal: (a, b) => a * b,
    },
    {
      op: '/',
      count: counts[3],
      cal: (a, b) => {
        return a < 0 ? Math.floor((a * -1) / b) * -1 : Math.floor(a / b);
      },
    },
  ];
  const len = operators.length;
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  const dfs = (idx, total) => {
    if (idx === n - 1) {
      if (total > max) max = total;
      if (total < min) min = total;
      return;
    }

    for (let i = 0; i < len; i++) {
      if (!operators[i].count) continue;
      operators[i].count -= 1;
      dfs(idx + 1, operators[i].cal(total, nums[idx + 1]));
      operators[i].count += 1;
    }
  };

  dfs(0, nums[0]);

  return max + '\n' + min;
}

console.log(solution(n, nums, counts));
