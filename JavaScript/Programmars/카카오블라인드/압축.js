// 문제: https://programmers.co.kr/learn/courses/30/lessons/17684
const solution = (msg) => {
  const dictionary = new Map();
  for (let i = 65; i <= 90; i++) {
    dictionary.set(String.fromCharCode(i), i - 64);
  }

  const answer = [];
  const len = msg.length;
  let currentIdx = 1;
  let temp = msg[0];
  let maxNum = 27;
  while (currentIdx <= len) {
    if (!dictionary.has(temp + msg[currentIdx])) {
      answer.push(dictionary.get(temp));
      dictionary.set(temp + msg[currentIdx], maxNum++);
      temp = msg[currentIdx++];
    } else {
      temp += msg[currentIdx];
      currentIdx++;
    }
  }

  return answer;
};

console.log(solution('KAKAO')); // [11, 1, 27, 15]
console.log(solution('TOBEORNOTTOBEORTOBEORNOT')); // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
console.log(solution('ABABABABABABABAB')); // [1, 2, 27, 29, 28, 31, 30]
