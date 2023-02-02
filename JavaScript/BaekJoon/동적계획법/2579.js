// 2579 계단 오르기 https://www.acmicpc.net/problem/2579
// 참고: https://github.com/glassk/ALS/blob/main/Python/BaekJoon/%EB%8F%99%EC%A0%81%EA%B3%84%ED%9A%8D%EB%B2%95.md#2579-%EA%B3%84%EB%8B%A8-%EC%98%A4%EB%A5%B4%EA%B8%B0
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(
  solution(
    +input[0],
    input.slice(1).map((v) => +v)
  )
);

// 한번에 1개 또는 2개씩 오를 수 있음
// 연속 3개 밟을 수 없음(시작점은 포함 안 됨)
// 마지막 도착 계단은 반드시 밟아야 함
function solution(n, scores) {
  const dp = Array.from({ length: n }, () => 0);

  dp[0] = scores[0];
  dp[1] = scores[0] + scores[1];
  dp[2] = Math.max(scores[0] + scores[2], scores[1] + scores[2]);

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(
      dp[i - 3] + scores[i - 1] + scores[i],
      dp[i - 2] + scores[i]
    );
  }

  return dp[n - 1];
}
