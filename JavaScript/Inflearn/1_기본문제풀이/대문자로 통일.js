// toUpperCase만 이용
function solution(str) {
    let answer = str.toUpperCase();

    return answer;
}

console.log(solution('ItisTimeToStudy'));


// 방법 1: charCodeAt, fromCharCode와 ASCII code 이용
function solution(str) {
    let answer = '';
    
    for (letter of str) {
        let num = letter.charCodeAt();

        if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
        else answer += letter;
    }

    return answer;
}

console.log(solution('ItisTimeToStudy'));


// 방법 2: toLowerCase와 toUpperCase 이용
function solution(str) {
  let answer = '';

  for (letter of str) {
    if (letter === letter.toLowerCase()) answer += letter.toUpperCase();
    else answer += letter;
  }

  return answer;
}

console.log(solution('ItisTimeToStudy'));