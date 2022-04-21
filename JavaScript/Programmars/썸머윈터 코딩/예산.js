function solution(d, budget) {
  let answer = 0;
  let rest = budget;
  d.sort((a, b) => a - b);

  for (let x of d) {
    if (x <= rest) {
      rest -= x;
      answer++;
    }
  }

  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9)); // 3
console.log(solution([2, 2, 3, 3], 10)); // 4
