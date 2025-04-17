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

// 250417
// DP로 해결해야 함
function solution(n) {
  const divisor = 1234567;
  const cache = Array.from({ length: n + 1 });
  cache[0] = 0;
  cache[1] = 1;

  for (let i = 2; i <= n; i++) {
    if (cache[i]) {
      return cache[i];
    } else {
      cache[i] = (cache[i - 1] + cache[i - 2]) % divisor;
    }
  }

  return cache[n];
}

// 재귀 호출 시 Recursion depth exceeded로 오답, 런타임 에러
function solution(n) {
  const divisor = 1234567;
  const cache = Array.from({ length: n + 1 });
  cache[0] = 0;
  cache[1] = 1;
  cache[2] = 1;

  function fibonacci(number) {
    if (cache[number]) {
      return cache[number];
    } else {
      const result = fibonacci(number - 1) + fibonacci(number - 2);
      cache[number] = result % divisor;
      return cache[number];
    }
  }

  return fibonacci(n);
}

console.log(solution(3)); // 2
console.log(solution(5)); // 5
