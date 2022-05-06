// 참고: https://noogoonaa.tistory.com/74#recentEntries
function solution(w, h) {
  // 유클리드 호제법
  const gcd = (a, b) => {
    const mod = a % b;
    if (mod === 0) {
      return b;
    }

    return gcd(b, mod);
  };

  const gcdValue = gcd(w, h);

  return w * h - (w + h - gcdValue);
}

console.log(solution(8, 12)); // 80
