// 내 풀이
function solution(s) {
  let answer = true;
  let flag = 0;
  const newS = s.toUpperCase();
  for (let x of newS) {
    if (x === 'P') flag += 1;
    else if (x === 'Y') flag -= 1;
  }

  if (flag !== 0) answer = false;

  return answer;
}

// 다른 풀이1: split()
function solution(s) {
  const upperS = s.toUpperCase();
  return upperS.split('P').length === upperS.split('Y').length;
}

// 다른 풀이2: match()
function solution(s) {
  return (s.match(/p/gi) || []).length === (s.match(/y/gi) || []).length;
}
