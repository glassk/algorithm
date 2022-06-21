// n개 숫자로 이뤄진 숫자열에서 s부터 e번째까지의 수 오름차순 정렬
// k번째 숫자 출력
// 케이스별 첫 번째 줄 N, s, e, k
// 두 번째 줄 N개 숫자
const solution = (t, testcases) => {
  const answer = Array.from({ length: t }, () => 0);
  testcases.forEach((testcase, index) => {
    const [[n, s, e, k], arr] = testcase;
    const targets = arr.slice(s - 1, s + e).sort((a, b) => a - b);
    answer[index] = targets[k - 1];
  });

  return answer;
};

console.log(
  solution(2, [
    [
      [6, 2, 5, 3],
      [5, 2, 7, 3, 8, 9],
    ],
    [
      [15, 3, 10, 3],
      [4, 15, 8, 16, 6, 6, 17, 3, 10, 11, 18, 7, 14, 7, 15],
    ],
  ])
); // [7, 6]
