// 문제: https://programmers.co.kr/learn/courses/30/lessons/76502
const solution = (s) => {
  const parenthesisObj = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const isRightString = (str) => {
    const stack = [];
    let next;
    for (let s of str) {
      if (s === '(' || s === '[' || s === '{') {
        stack.push(s);
      } else {
        if (stack.length === 0) return false;
        next = stack.pop();
        if (s !== parenthesisObj[next]) return false;
      }
    }
    return stack.length === 0;
  };

  const sLen = s.length;
  if (sLen % 2 !== 0) return 0;

  for (let [open, close] of Object.entries(parenthesisObj)) {
    if (s.split(open).length !== s.split(close).length) return 0;
  }

  let answer = 0;
  let str = s;
  for (let x = 0; x < sLen; x++) {
    if (isRightString(str)) answer++;
    str = str.substr(1) + str[0];
  }

  return answer;
};

console.log(solution('[](){}')); // 3
console.log(solution('}]()[{')); // 2
console.log(solution('[)(]')); // 0
console.log(solution('}}}')); // 0
