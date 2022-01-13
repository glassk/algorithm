// 정규표현식, test()
function solution(s) {
  const strLen = s.length;
  return (strLen === 4 || strLen === 6) && /^[0-9]+$/.test(s) ? true : false;
}
