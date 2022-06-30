// 문제: https://programmers.co.kr/learn/courses/30/lessons/12924
const solution = (n) => {
  let answer = 0;
  let left = 1;
  let right = 1;
  let sum = 0;
  while (left <= n || right <= n) {
    sum = 0;
    for (let i = left; i <= right; i++) {
      sum += i;
    }
    if (sum === n) {
      answer++;
      left++;
      right++;
    } else if (sum < n) right++;
    else left++;
  }

  return answer;
};

console.log(solution(15)); // 4
