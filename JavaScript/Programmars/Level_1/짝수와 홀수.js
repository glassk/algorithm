function solution(num) {
  let answer = '';
  answer = num === 0 || num % 2 === 0 ? 'Even' : 'Odd';
  return answer;
}

console.log(solution(3)); // 'Odd'
console.log(solution(4)); // 'Even'
