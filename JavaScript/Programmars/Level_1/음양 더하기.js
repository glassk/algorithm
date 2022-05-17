function solution(absolutes, signs) {
  let answer = 0;
  const len = absolutes.length;
  for (let i = 0; i < len; i++) {
    answer = signs[i] ? answer + absolutes[i] : answer - absolutes[i];
  }
  return answer;
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0
