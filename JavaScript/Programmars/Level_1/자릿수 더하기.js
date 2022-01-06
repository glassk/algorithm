// 내 풀이 1: 몫과 나머지 연산
function solution(n) {
  let answer = 0;
  let tempN = n;
  while (tempN > 0) {
    answer += tempN % 10;
    tempN = Math.floor(tempN / 10);
  }

  return answer;
}

// 내 풀이 2: 문자열 변환
function solution(n) {
  let answer = 0;
  let strN = String(n);
  for (let num of strN) {
    answer += Number(num);
  }

  return answer;
}

console.log(solution(123)); // 6
console.log(solution(987)); // 24

// 다른 풀이: reduce 활용
function solution(n) {
  return String(n)
    .split('')
    .reduce((acc, val) => acc + parseInt(val), 0);
}
