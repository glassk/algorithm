function solution(n, lost, reserve) {
  const students = Array.from({ length: n + 2 }, () => 0);
  lost.forEach((num) => (students[num] -= 1));
  reserve.forEach((num) => (students[num] += 1));

  for (let i = 1; i <= n; i++) {
    if (students[i] === -1) {
      if (students[i - 1] > 0) {
        students[i] = 0;
        students[i - 1] -= 1;
      } else if (students[i + 1] > 0) {
        students[i] = 0;
        students[i + 1] -= 1;
      }
    }
  }

  return students.filter((v, i) => v >= 0).length - 2;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
