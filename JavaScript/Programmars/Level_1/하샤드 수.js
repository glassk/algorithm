function addAllDigit(num) {
  return String(num)
    .split('')
    .reduce((acc, val) => acc + Number(val), 0);
}

function solution(x) {
  return x % addAllDigit(x) === 0 ? true : false;
}

console.log(solution(10)); // true
console.log(solution(12)); // true
console.log(solution(11)); // false
console.log(solution(13)); // false
