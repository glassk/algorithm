// 내 풀이
function solution(x, n) {
  const answer = [];
  for (let i = 1; i < n + 1; i++) {
    answer.push(x * i);
  }
  return answer;
}

console.log(solution(2, 5)); // [2,4,6,8,10]
console.log(solution(4, 3)); // [4,8,12]
console.log(solution(-4, 2)); // [-4, -8]

// 다른 풀이: Array.fill(), map() 활용
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
