// k가지 동전
// t원의 지폐를 동전(각 동전 개수 정해져 있음)으로 바꿔주려고 함
// 지폐를 동전으로 교환하는 방법의 가지 수 구하기
const solution = (t, k, arr) => {
  let answer = 0;

  const dfs = (level, sum) => {
    if (sum > t) return;
    if (level === k) {
      if (sum === t) answer++;
    } else {
      // ✅ 0개~level에 해당하는 동전 개수까지
      for (let i = 0; i <= arr[level][1]; i++) {
        dfs(level + 1, sum + arr[level][0] * i);
      }
    }
  };

  dfs(0, 0);

  return answer;
};

console.log(
  solution(20, 3, [
    [5, 3],
    [10, 2],
    [1, 5],
  ])
); // 4
