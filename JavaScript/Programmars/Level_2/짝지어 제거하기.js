function solution(s) {
  if (s.length % 2 === 1) return 0;

  const stack = [];
  for (let char of s) {
    if (stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution('baabaa')); // 1
console.log(solution('cdcd')); // 0
