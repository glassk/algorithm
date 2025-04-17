// 문제: https://programmers.co.kr/learn/courses/30/lessons/12951
function solution(s) {
  let answer = '';

  let tempWord = '';
  for (let char of s) {
    if (char === ' ') {
      if (tempWord.length > 0) {
        answer += tempWord[0].toUpperCase() + tempWord.substr(1).toLowerCase();
        tempWord = '';
      }
      answer += ' ';
    } else tempWord += char;
  }

  if (tempWord.length > 0)
    answer += tempWord[0].toUpperCase() + tempWord.substr(1).toLowerCase();

  return answer;
}

// 다른 풀이: ✅ charAt() => 대상 문자열이 공백인 경우 빈 문자열 리턴 ([index]는 undefined 리턴)
// 참고: https://thisthat.dev/string-char-at-vs-string-bracket-notation/
function solution(s) {
  return s
    .split(' ')
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(' ');
}

// 250417
function solution(s) {
  return s
    .split(' ')
    .map((word) => {
      if (!word) return '';
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

console.log(solution('3people unFollowed me')); // "3people Unfollowed Me"
console.log(solution('for the last week')); // "For The Last Week"
