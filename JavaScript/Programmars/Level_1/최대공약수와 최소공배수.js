function solution(n, m) {
  const answer = [];
  const [max, min] = [Math.max(n, m), Math.min(n, m)];
  for (let i = min; i >= 1; i--) {
    if (n % i === 0 && m % i === 0) {
      answer.push(i);
      break;
    }
  }
  for (let i = max; i <= n * m; i++) {
    if (i % n === 0 && i % m === 0) {
      answer.push(i);
      break;
    }
  }

  return answer;
}

console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]

// ✅ 다른 풀이: 유클리드 호제법
function solution(n, m) {
  let [max, min] = [Math.max(n, m), Math.min(n, m)];
  let t = 1;
  while (t > 0) {
    t = max % min;
    [max, min] = [min, t];
  }

  return [max, Math.floor((n * m) / max)];
}
