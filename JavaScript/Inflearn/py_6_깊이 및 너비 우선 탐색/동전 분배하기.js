// n개의 동전 a, b, c에게 나눠주기
// 세 명이 받은 각 총액(서로 달라야 함)을 계산해서
// 총액이 가장 큰 사람과 가장 작은 사람의 차 간 최소 차이 구하기
const solution = (n, arr) => {
  const PEOPLE_COUNT = 3;
  let answer = Number.MAX_SAFE_INTEGER;
  const sumArr = Array.from({ length: PEOPLE_COUNT }, () => 0);

  const dfs = (level) => {
    if (level === n) {
      if (
        sumArr[0] !== sumArr[1] &&
        sumArr[1] !== sumArr[2] &&
        sumArr[0] !== sumArr[2]
      ) {
        answer = Math.min(answer, Math.max(...sumArr) - Math.min(...sumArr));
      }
    } else {
      for (let i = 0; i < PEOPLE_COUNT; i++) {
        sumArr[i] += arr[level];
        dfs(level + 1);
        sumArr[i] -= arr[level];
      }
    }
  };

  dfs(0);

  return answer;
};

console.log(solution(7, [8, 9, 11, 12, 23, 15, 17])); // 5
