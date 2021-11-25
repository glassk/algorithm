// 방법 1: substring 이용
function solution(string) {
  let answer;
  let midIndex = Math.floor(string.length / 2);

  if (string.length % 2 == 1) answer = string.substring(midIndex, midIndex + 1);
  else answer = string.substring(midIndex - 1, midIndex + 1);

  return answer;
}

// 방법 2: substr 이용
function solution(string) {
  let answer;
  let midIndex = Math.floor(string.length / 2);

  if (string.length % 2 == 1) answer = string.substr(midIndex, 1);
  else answer = string.substr(midIndex - 1, 2);

  return answer;
}

console.log(solution('study')); // u
console.log(solution('good')); // oo
