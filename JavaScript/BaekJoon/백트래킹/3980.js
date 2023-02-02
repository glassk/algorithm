// 3980 선발 명단 https://www.acmicpc.net/problem/3980
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let testCase;
let answer = '';
const line = 11;
for (let i = 1; i < input.length; i += line) {
  testCase = input
    .slice(i, i + line)
    .map((row) => row.split(' ').map((v) => +v));
  answer += solution(testCase) + '\n';
}
console.log(answer.trim());

// 11명 선수의 각 포지션에서의 능력을 0~100로 수치화함 (0 = 적합하지 않음)
// 모든 선수의 포지션 정하기. 0인 포지션에는 배치될 수 없음
// sij: i번 선수가 j번 포지션에서 뛸 때의 능력
// 각 선수에게 적합한(0보다 큰) 포지션의 최대 개수는 5개
// 모든 포지션을 채웠을 때 능력치 합의 최댓값 구하기
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  const visited = Array.from({ length: line }, () => false);
  const players = []; // 각 포지션별 적합한 선수 목록 [선수 인덱스, 능력치]
  for (let i = 0; i < line; i++) {
    const temp = [];
    for (let j = 0; j < line; j++) {
      if (arr[j][i] !== 0) temp.push([j, arr[j][i]]);
    }
    players.push(temp);
  }

  function dfs(idx, total) {
    if (idx === line) {
      if (answer < total) answer = total;
      return;
    }

    for (const [i, v] of players[idx]) {
      if (visited[i]) continue;
      visited[i] = true;
      dfs(idx + 1, total + v);
      visited[i] = false;
    }
  }

  dfs(0, 0); // 포지션 인덱스, 능력치 합

  return answer;
}
