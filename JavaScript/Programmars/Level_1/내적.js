function solution(a, b) {
  let answer = 0;
  const len = a.length;
  for (let i = 0; i < len; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])); // 3
console.log(solution([-1, 0, 1], [1, 0, -1])); // -2

// 다른 풀이: reduce 활용
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
