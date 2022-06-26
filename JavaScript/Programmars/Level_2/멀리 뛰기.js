// 문제: https://programmers.co.kr/learn/courses/30/lessons/12914
const solution = (n) => {
  let answer = 0;
  const dynamic = Array.from({ length: n + 2 }, () => 0);
  dynamic[1] = 1;
  dynamic[2] = 1;
  for (let i = 3; i <= n + 1; i++) {
    dynamic[i] = (dynamic[i - 1] + dynamic[i - 2]) % 1234567;
  }

  return dynamic[n + 1];
};

console.log(solution(4)); // 5
console.log(solution(3)); // 3
