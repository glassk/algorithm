// 문제: https://programmers.co.kr/learn/courses/30/lessons/70129
const solution = (s) => {
  let convertCount = 0;
  let zeroCount = 0;
  const zeroRegex = /0/g;

  let x = s;
  let c;
  while (x !== '1') {
    if (x.match(zeroRegex)) {
      zeroCount += x.match(zeroRegex).length;
      x = x.replace(zeroRegex, '');
    }
    c = x.length;
    x = c.toString(2);
    convertCount++;
  }

  return [convertCount, zeroCount];
};

console.log(solution('110010101001')); // [ 3, 8 ]
console.log(solution('01110')); // [ 3, 3 ]
console.log(solution('1111111')); // [ 4, 1 ]
