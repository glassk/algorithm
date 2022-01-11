// 내 풀이
function solution(n) {
  let answer = -1;
  const squareRoot = Math.sqrt(n);
  if (Number.isInteger(squareRoot)) answer = Math.pow(squareRoot + 1, 2);

  return answer;
}
