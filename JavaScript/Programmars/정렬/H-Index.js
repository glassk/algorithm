// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/42747
// 참고: https://laycoder.tistory.com/211
function solution(citations) {
  let answer = 0;
  const arr = [...citations].sort((a, b) => b - a);
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (i < arr[i]) {
      answer++;
    }
  }

  return answer;
}
