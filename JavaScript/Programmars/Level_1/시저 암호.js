function solution(s, n) {
  const UPPERCASE_START = 65;
  const UPPERCASE_END = 90;
  const LOWERCASE_START = 97;
  const LOWERCASE_END = 122;
  const COUNT = 26;

  let answer = '';
  let code, newCode;
  for (let char of s) {
    if (char === ' ') answer += char;
    else {
      code = char.charCodeAt();
      newCode = code + n;
      if (code >= UPPERCASE_START && code <= UPPERCASE_END) {
        if (newCode > UPPERCASE_END) {
          newCode -= COUNT;
        }
      } else if (code >= LOWERCASE_START && code <= LOWERCASE_END) {
        if (newCode > LOWERCASE_END) {
          newCode -= COUNT;
        }
      }
      answer += String.fromCharCode(newCode);
    }
  }
  return answer;
}

console.log(solution('AB', 1)); // 'BC'
console.log(solution('z', 1)); // 'a'
console.log(solution('a B z', 4)); // 'e F D'
