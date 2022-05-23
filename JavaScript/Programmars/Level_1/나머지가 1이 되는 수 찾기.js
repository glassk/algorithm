function solution(n) {
  for (let i = 1; i < n; i++) {
    if (n % i === 1) return i;
  }
}

console.log(solution(10)); // 3
console.log(solution(12)); // 11
