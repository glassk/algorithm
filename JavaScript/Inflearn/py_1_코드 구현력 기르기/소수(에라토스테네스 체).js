// 1부터 n까지의 소수 개수 출력
const solution = (n) => {
  const check = Array.from({ length: n + 1 }, () => 0);
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    if (check[i] === 0) {
      answer++;
      for (let j = i; j <= n; j += i) {
        check[j] = 1;
      }
    }
  }

  return answer;
};

console.log(solution(20)); // 8
