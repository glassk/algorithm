// https://school.programmers.co.kr/learn/courses/30/lessons/468371
// 1. 최대공약수, 최대공배수
function solution(signals) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  const totalLcm = signals.reduce((acc, [g, y, r]) => lcm(acc, g + y + r), 1);

  for (let t = 1; t <= totalLcm; t++) {
    const allYellow = signals.every(([g, y, r]) => {
      const cycle = g + y + r;
      const pos = t % cycle || cycle; // 0이면 cycle로 대체
      return pos >= g + 1 && pos <= g + y;
    });

    if (allYellow) return t;
  }

  return -1;
}

// 2. 브루트포스
function solution(signals) {
  const MAX = Math.pow(20, signals.length); // 각 주기의 최대값이 20이므로 20^n까지 검사

  for (let t = 1; t <= MAX; t++) {
    const allYellow = signals.every(([g, y, r]) => {
      const cycle = g + y + r;
      const pos = t % cycle || cycle;
      return pos >= g + 1 && pos <= g + y;
    });

    if (allYellow) return t;
  }

  return -1;
}
