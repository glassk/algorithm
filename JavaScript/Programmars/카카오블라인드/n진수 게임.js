// 문제: https://programmers.co.kr/learn/courses/30/lessons/17687
const solution = (n, t, m, p) => {
  let numbers = '';
  for (let num = 0; num <= m * t; num++) {
    numbers += num.toString(n);
    if (numbers.length >= m * t) break;
  }

  let answer = '';
  for (let i = p - 1; i < m * t; i += m) {
    if (isNaN(numbers[i])) answer += numbers[i].toUpperCase();
    else answer += numbers[i];
  }

  return answer;
};

console.log(solution(2, 4, 2, 1)); // 0111
console.log(solution(16, 16, 2, 1)); // 02468ACE11111111
console.log(solution(16, 16, 2, 2)); // 13579BDF01234567
