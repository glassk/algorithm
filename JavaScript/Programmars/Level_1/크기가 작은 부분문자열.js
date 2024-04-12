// https://school.programmers.co.kr/learn/courses/30/lessons/147355
function solution(t, p) {
  const tLen = t.length;
  const pLen = p.length;
  const pNum = Number(p);
  let count = 0;

  for (let i = 0; i <= tLen - pLen; i++) {
    if (Number(t.slice(i, i + pLen)) <= pNum) {
      count++;
    }
  }

  return count;
}

console.log('3141592', '271'); // 2
console.log('500220839878', '7'); // 8
console.log('10203', '15'); // 3
