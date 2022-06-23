// 문제: https://programmers.co.kr/learn/courses/30/lessons/60058
const solution = (p) => {
  const isBalancedString = (str) => {
    if (str.length % 2 !== 0) return false;
    let count = 0;
    for (let item of str) {
      if (item === '(') count++;
      else count--;
    }
    return count === 0;
  };

  const isRightString = (str) => {
    const stack = [];
    str.split('').forEach((item) => {
      if (item === '(') stack.push(item);
      else {
        if (stack.length === 0) return false;
        stack.pop();
      }
    });
    return stack.length === 0;
  };

  const splitTwoBalancedString = (str) => {
    const len = str.length;
    for (let i = 2; i <= len; i += 2) {
      if (isBalancedString(str.substr(0, i))) {
        return [str.substr(0, i), str.substr(i)];
      }
    }
  };

  const reverseString = (str) => {
    let result = '';
    for (let item of str) {
      if (item === '(') result += ')';
      else result += '(';
    }
    return result;
  };

  const convertToRightString = (str) => {
    if (str === '') return '';
    const [u, v] = splitTwoBalancedString(str);

    if (isRightString(u)) {
      return u + convertToRightString(v);
    } else {
      const newV = convertToRightString(v);
      const newU = reverseString(u.substring(1, u.length - 1));
      return '(' + newV + ')' + newU;
    }
  };

  return isRightString(p) ? p : convertToRightString(p);
};

console.log(solution('(()())()')); // "(()())()"
console.log(solution(')(')); // "()"
console.log(solution('()))((()')); // "()(())()"
