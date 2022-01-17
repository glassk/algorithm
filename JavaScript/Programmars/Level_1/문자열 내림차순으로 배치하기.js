function solution(s) {
  return s.split('').sort().reverse().join('');
}

console.log(solution('Zbcdefg')); // "gfedcbZ"
