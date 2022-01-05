// 내 풀이
function solution(phone_number) {
  let answer = '';
  const maskNum = phone_number.length - 4;
  for (let i = 0; i < maskNum; i++) {
    answer += '*';
  }
  answer += phone_number.substr(maskNum, 4);
  return answer;
}

console.log(solution('01033334444')); // "*******4444"
console.log(solution('027778888')); // "*****8888"

// 다른 풀이 1: repeat()과 slice() 활용
function solution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}

// 다른 풀이 2: 정규표현식 활용
function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, '*');
}
