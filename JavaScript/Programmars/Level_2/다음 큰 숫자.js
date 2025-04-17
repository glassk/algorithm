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

// 250417
function solution(n) {
  const oneCount = countOneOfBinaryFromNumber(n);
  let current = n + 1;

  while (true) {
    if (countOneOfBinaryFromNumber(current) === oneCount) {
      return current;
    }
    current++;
  }
}

function countOneOfBinaryFromNumber(number) {
  return number.toString(2).split('1').length - 1; // replaceAll로 하면 좀 더 오래 걸림. 시간 복잡도는 동일하나 내부적으로 replaceAll이 패턴 검색과 내부 문자열 생성으로 연산이 더 많음.
}

console.log(solution(78)); // 83
console.log(solution(15)); // 23
