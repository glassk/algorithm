// 문제: https://www.acmicpc.net/problem/15650
// '고른 수열은 오름차순이어야 한다' 조건 추가
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map((v) => +v);

function solution(n, m) {
  const answer = [];
  const visited = Array.from({ length: n }, () => false);
  const temp = [];

  function dfs(count, start) {
    if (count === m) {
      answer.push(temp.join(' '));
      return;
    }
    for (let i = start; i < n; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      temp.push(i + 1);
      dfs(count + 1, i);
      temp.pop();
      visited[i] = false;
    }
  }

  dfs(0, 0);

  return answer.join('\n');
}

console.log(solution(n, m));
