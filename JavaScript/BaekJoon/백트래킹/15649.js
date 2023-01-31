// 문제: https://www.acmicpc.net/problem/15649
// 참고: https://junghyeonsu.tistory.com/190
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map((v) => +v);

function solution(n, m) {
  const answer = [];
  const visited = Array.from({ length: n }, () => false);
  const temp = [];

  function dfs(count) {
    if (count === m) {
      answer.push(temp.join(' '));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;

      visited[i] = true;
      temp.push(i + 1);
      dfs(count + 1);
      visited[i] = false;
      temp.pop();
    }
  }

  dfs(0);

  return answer.join('\n');
}

console.log(solution(n, m));
