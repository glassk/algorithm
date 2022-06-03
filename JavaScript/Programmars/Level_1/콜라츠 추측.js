function solution(num) {
  let answer = 0;
  let current = num;
  while (current !== 1 && answer < 500) {
    if (current % 2 === 0) {
      current = Math.floor(current / 2);
    } else {
      current = current * 3 + 1;
    }
    answer++;
  }

  return answer === 500 ? -1 : answer;
}

console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1
