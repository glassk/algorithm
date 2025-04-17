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

// 250417
function solution(n) {
  let answer = 1; // n 자기 자신 포함

  function dfs(current, sum) {
    if (sum > n) {
      return;
    } else if (sum === n) {
      answer++;
      return;
    } else {
      dfs(current + 1, sum + current);
    }
  }

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    dfs(i, 0);
  }

  return answer;
}

console.log(solution(15)); // 4
