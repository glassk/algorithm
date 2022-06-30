// 오늘부터 N+1일째 되는 날 휴가를 가기 위해
// 남은 N일 동안 최대한 많은 상담을 해서 휴가비 얻기
// arr: 각 상담 완료하는 데 걸리는 날 수 T, 받을 수 있는 금액 P
// 최대 이익이 나는 상담 스케줄 짜기
const solution = (n, arr) => {
  let answer = 0;

  const dfs = (day, sum) => {
    if (day === n) {
      answer = Math.max(answer, sum);
    } else {
      // ✅ 다음날 포함할지 확인
      if (day + arr[day][0] <= n) {
        dfs(day + arr[day][0], sum + arr[day][1]);
      } else {
        dfs(day + 1, sum);
      }
    }
  };

  dfs(0, 0);

  return answer;
};

console.log(
  solution(7, [
    [4, 20],
    [2, 10],
    [3, 15],
    [3, 20],
    [2, 30],
    [2, 20],
    [1, 10],
  ])
); // 60
