// 문제: https://programmers.co.kr/learn/courses/30/lessons/42883
const solution = (number, k) => {
  let stack = [number[0]];
  const numLen = number.length;
  for (let i = 1; i < numLen; i++) {
    while (stack.length > 0 && stack[stack.length - 1] < number[i] && k > 0) {
      k--;
      stack.pop();
    }
    stack.push(number[i]);
  }

  // ✅
  if (k !== 0) {
    stack = stack.slice(0, numLen - k);
  }

  return stack.join('');
};

console.log(solution('1924', 2)); // 94
console.log(solution('1231234', 3)); // 3234
console.log(solution('4177252841', 4)); // 775841
