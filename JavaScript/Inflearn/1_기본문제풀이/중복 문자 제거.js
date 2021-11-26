function solution(string) {
    let answer = '';

    for (let i = 0; i < string.length; i++) {
        if (string.indexOf(string[i]) === i) answer += string[i];
    }

    return answer
}

console.log(solution('ksekkset')); // kset


// 추가: 특정 문자의 개수 구하기
function solution(string) {
  let answer = 0;
  let position = string.indexOf('k');

  while (position !== -1) {
      answer++;
      position = string.indexOf('k', position + 1);
  }

  return answer;
}

console.log(solution('ksekkset')); // 3