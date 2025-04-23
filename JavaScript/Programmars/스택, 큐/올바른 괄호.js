// 문제: https://programmers.co.kr/learn/courses/30/lessons/12909?language=javascript
const solution = (s) => {
  if (s.length % 2 !== 0) return false;

  const stack = [];
  for (let p of s) {
    if (p === '(') stack.push(p);
    else {
      if (stack.length < 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
};

// 250417
function solution(s) {
  let count = 0;
  for (const item of s) {
    if (item === '(') {
      count++;
    } else if (item === ')') {
      if (count > 0) {
        count--;
      } else {
        return false;
      }
    }
  }

  return count === 0;
}

console.log(solution('()()')); // true
console.log(solution('(())()')); // true
console.log(solution(')()(')); // false
console.log(solution('(()(')); // false
