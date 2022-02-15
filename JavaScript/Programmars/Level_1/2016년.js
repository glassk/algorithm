// Date 객체, getDay() 메서드
function solution(a, b) {
  let answer = '';
  let day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(`2016,${a},${b}`);
  answer = day[date.getDay()];

  return answer;
}

console.log(5, 24); // "TUE"

// 다른 풀이: 월별 일 수 배열, 배열 인덱스 활용
function solution(a, b) {
  let answer = '';
  const monthEnd = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  let temp = 0;

  for (let i = 1; i < a; i++) {
    temp += monthEnd[i - 1];
  }

  temp += b - 1;
  answer = day[temp % 7];

  return answer;
}
