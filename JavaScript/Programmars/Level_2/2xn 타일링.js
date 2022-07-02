// 문제: https://programmers.co.kr/learn/courses/30/lessons/12900
const solution = (n) => {
  const arr = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1000000007;
  }

  return arr[n];
};

console.log(solution(4)); // 5
