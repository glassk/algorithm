// 1번 경로의 개수 (오답)
function solution(n, bridges) {
  return bridges.reduce((acc, val) => acc * val, 1);
}

console.log(solution(3, [2, 3, 2])); // 12
console.log(solution(3, [3, 3, 3])); // 27
