// 문제: https://programmers.co.kr/learn/courses/30/lessons/12945?
const solution = (n) => {
  const fibo = Array.from({ length: n + 1 }, () => 0);
  fibo[1] = 1;
  fibo[2] = 1;
  for (let i = 3; i <= n; i++) {
    fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 1234567;
  }

  return fibo[n];
};

console.log(solution(3)); // 2
console.log(solution(5)); // 5
