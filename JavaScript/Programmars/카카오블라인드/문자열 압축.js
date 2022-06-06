function solution(s) {
  const sLen = s.length;

  const shortenString = (len) => {
    let result = '';
    let temp = s.substr(0, len);
    let next;
    let count = 1;
    for (let i = len; i < sLen; i += len) {
      next = s.substr(i, len);
      if (next === temp) {
        count++;
      } else {
        result += (count === 1 ? '' : count) + temp;
        temp = next;
        count = 1;
      }
    }
    result += (count === 1 ? '' : count) + temp;

    return result.length;
  };

  let answer = sLen;
  let shortLen;
  for (let i = 1; i < sLen; i++) {
    shortLen = shortenString(i);
    if (shortLen < answer) answer = shortLen;
  }

  return answer;
}

console.log(solution('aabbaccc')); // 7
console.log(solution('ababcdcdababcdcd')); // 9
console.log(solution('abcabcdede')); // 8
console.log(solution('abcabcabcabcdededededede')); // 14
console.log(solution('xababcdcdababcdcd')); // 17
