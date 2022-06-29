// 문제: https://programmers.co.kr/learn/courses/30/lessons/42839
const solution = (numbers) => {
  const numLen = numbers.length;
  const check = Array.from({ length: numLen }, () => 0);
  const nums = numbers.split('');
  const answer = new Set();
  let len;

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const permutation = (level, num) => {
    if (level === len) {
      if (isPrime(+num)) answer.add(+num);
    } else {
      for (let i = 0; i < numLen; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          permutation(level + 1, num + nums[i]);
          check[i] = 0;
        }
      }
    }
  };

  for (len = 1; len <= numLen; len++) {
    permutation(0, '');
  }

  return answer.size;
};

console.log(solution('17')); // 3
console.log(solution('011')); // 2
