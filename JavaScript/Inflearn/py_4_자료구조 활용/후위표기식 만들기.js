// ✅ 중위표기식을 후위표기식으로 변환하기
const solution = (exp) => {
  let answer = '';
  const stack = [];
  exp.split('').forEach((item) => {
    if (!isNaN(item)) {
      answer += item;
    } else {
      if (item === '(') {
        stack.push(item);
      } else if (item === '*' || item === '/') {
        while (
          (stack.length > 0 && stack[stack.length - 1] === '*') ||
          stack[stack.length - 1] === '/'
        ) {
          answer += stack.pop();
        }
        stack.push(item);
      } else if (item === '+' || item === '-') {
        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
          answer += stack.pop();
        }
        stack.push(item);
      } else if (item === ')') {
        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
          answer += stack.pop();
        }
        stack.pop();
      }
    }
  });
  while (stack.length > 0) {
    answer += stack.pop();
  }

  return answer;
};

console.log(solution('3+5*2/(7-2)')); // 352*72-/+
console.log(solution('3*(5+2)-9')); // 352+*9-
