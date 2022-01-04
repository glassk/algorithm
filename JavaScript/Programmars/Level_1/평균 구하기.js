function solution(arr) {
  let answer = 0;
  const arrSum = arr.reduce((acc, val) => acc + val);
  answer = arrSum / arr.length;
  return answer;
}
