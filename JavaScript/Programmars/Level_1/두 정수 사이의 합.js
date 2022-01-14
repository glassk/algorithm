// 내 풀이
function solution(a, b) {
  let answer = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }
  return answer;
}

console.log(3, 5); // 12
console.log(3, 3); // 3
console.log(5, 3); // 12

// 다른 풀이: 구조 분해 할당
function solution(a, b) {
  let answer = 0;
  let x = a,
    y = b;
  if (x > y) [x, y] = [y, x];

  for (let i = x; i <= y; i++) answer += i;

  return answer;
}
