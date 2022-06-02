function solution(n) {
  let answer = 0;
  const check = Array.from({ length: n + 1 }, () => 0);
  for (let i = 2; i <= n; i++) {
    if (check[i] === 0) {
      answer += 1;
      for (let j = i; j <= n; j += i) {
        check[j] = 1;
      }
    }
  }

  return answer;
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3
