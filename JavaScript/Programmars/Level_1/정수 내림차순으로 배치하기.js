// 내 풀이
function solution(n) {
  const numArr = String(n)
    .split('')
    .map((val, idx) => {
      return Number(val);
    });
  numArr.sort((x, y) => y - x);

  return Number(numArr.join(''));
}

console.log(solution(118372)); // 873211

// 다른 풀이
function solution(n) {
  const newN = n + '';
  const newArr = newN.split('').sort().reverse().join('');

  return +newArr;
}
