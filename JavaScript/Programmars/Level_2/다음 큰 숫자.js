// 문제: https://programmers.co.kr/learn/courses/30/lessons/12911
const solution = (n) => {
  const countOneOfBinary = (str) => {
    return str.toString(2).replace(/0/g, '').length;
  };

  let answer = n + 1;
  const oneCount = countOneOfBinary(n);

  while (true) {
    if (countOneOfBinary(answer) === oneCount) return answer;
    else answer++;
  }
};

console.log(solution(78)); // 83
console.log(solution(15)); // 23
