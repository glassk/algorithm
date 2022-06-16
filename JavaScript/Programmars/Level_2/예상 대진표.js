// https://programmers.co.kr/learn/courses/30/lessons/12985?language=javascript
const solution = (n, a, b) => {
  let answer = 0; // 라운드 카운트

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
};

console.log(solution(8, 4, 7)); // 3
