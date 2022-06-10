function solution(n, k) {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const num = n.toString(k);
  const primes = [];
  const matchNum = num.match(/0?[^0]+0?/g);
  if (!matchNum) return 0;
  for (let num of matchNum) {
    const temp = +num.replace(/0/g, '');
    if (isPrime(temp)) primes.push(temp);
  }

  return primes.length;
}

console.log(solution(437674, 3)); // 3
console.log(solution(110011, 10)); // 2
