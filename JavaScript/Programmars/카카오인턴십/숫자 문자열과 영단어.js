function solution(s) {
  const wordObj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let answer = '';
  let temp = '';
  for (let x of s) {
    if (isNaN(x)) {
      temp += x;
      if (temp in wordObj) {
        answer += wordObj[temp];
        temp = '';
      }
    } else {
      answer += x;
    }
  }

  return parseInt(answer);
}

console.log(solution('one4seveneight')); // 1478
console.log(solution('23four5six7')); // 234567
console.log(solution('2three45sixseven')); // 234567
console.log(solution('123')); // 123

// 다른 풀이: split, join 활용
function solution(s) {
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  let answer = s;
  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
