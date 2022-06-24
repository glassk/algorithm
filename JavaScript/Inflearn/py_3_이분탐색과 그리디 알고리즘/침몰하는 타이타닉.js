// n명 승객, 구명보트 2명 이하로만 탈 수 있음
// 보트 한 개 수용 가능 무게 m 이하
// n명 승객 몸무게 -> 모두 탈출하기 위한 구명보트 최소개수
const solution = (n, m, arr) => {
  arr.sort((a, b) => a - b);

  let answer = 0;
  while (arr.length > 0) {
    if (arr.length === 1) {
      answer++;
      break;
    }
    if (arr[0] + arr[arr.length - 1] <= m) {
      arr.pop();
      arr.shift();
    } else {
      arr.pop();
    }
    answer++;
  }

  return answer;
};

console.log(solution(5, 140, [90, 50, 70, 100, 60])); // 3
