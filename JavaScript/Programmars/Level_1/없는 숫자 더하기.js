function solution(numbers) {
  const SIZE = 10;
  const check = Array.from({ length: SIZE }, () => 0);
  numbers.forEach((num) => {
    check[num] += 1;
  });

  let answer = 0;
  for (let i = 0; i < SIZE; i++) {
    if (check[i] === 0) answer += i;
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); // 14
console.log(solution([5, 8, 4, 0, 6, 7, 9])); // 6

// 다른 풀이: includes() 활용
function solution(numbers) {
  let cnt = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) cnt += i;
  }
  return cnt;
}

// 다른 풀이: reduce() 활용, 합 계산
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
