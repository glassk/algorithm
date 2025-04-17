// https://school.programmers.co.kr/learn/courses/30/lessons/12941
function solution(A, B) {
  const orderedA = A.sort((a, b) => a - b);
  const orderedB = B.sort((a, b) => b - a);

  return orderedA.reduce(
    (sum, value, index) => sum + value * orderedB[index],
    0
  );
}

console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1, 2], [3, 4])); // 10
