// 방법 1: Number()
function solution(s) {
  return Number(s);
}

// 방법 2: parseInt()
function solution(s) {
  return parseInt(s);
}

// 방법 3: +(숫자)
function solution(s) {
  return +s;
}

console.log(solution('1234')); // 1234
console.log(solution('-1234')); // -1234
