// 내 코드
function solution(s) {
  let answer = '';
  const sLen = s.length;
  const midIdx = Math.floor(sLen / 2);

  if (sLen % 2 === 1) answer = s[midIdx];
  else answer = s.substr(midIdx - 1, 2);

  return answer;
}

// 다른 코드
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
