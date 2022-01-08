// 내 풀이
function solution(n) {
  return String(n)
    .split('')
    .reverse()
    .map((val, idx) => Number(val));
}

console.log(solution(12345)); // [5,4,3,2,1]

// 다른 풀이: do-while문, 몫/나머지 연산
function solution(n) {
  const arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
