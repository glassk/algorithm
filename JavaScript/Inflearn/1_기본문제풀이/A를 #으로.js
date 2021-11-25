// 방법 1: for문과 if문 이용
function solution(str) {
  let answer = '';

  for (let letter of str) {
    if (letter === 'A') answer += '#';
    else answer += letter;
  }

  return answer;
}

console.log(solution('BANANA'));


// 방법 2: replace와 정규표현식 이용
function solution(str) {
    let answer = str;
    answer = answer.replace(/A/g, "#");
    return answer;
}

console.log(solution('BANANA'));