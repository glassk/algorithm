// n명 지원자의 키와 몸무게 정보
// 다른 모든 지원자와 일대일 비교했을 때
// 키와 몸무게 중 적어도 하나는 크거나 무거운 지원자만 뽑음
// 씨름 선수로 뽑히는 최대 인원 출력
const solution = (n, arr) => {
  arr.sort((a, b) => a[0] - b[0]);

  let answer = 1;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i][1] > arr[i + 1][1]) answer++;
  }
  return answer;
};

console.log(
  solution(5, [
    [172, 67],
    [183, 65],
    [180, 70],
    [170, 72],
    [181, 60],
  ])
); // 3
