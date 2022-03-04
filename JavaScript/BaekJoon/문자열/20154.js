// 20154 이 구역의 승자는 누구야?!
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// 시간 초과
function solution(string) {
  const strokeNum = [
    3, 2, 1, 2, 3, 3, 3, 3, 1, 1, 3, 1, 3, 3, 1, 2, 2, 2, 1, 2, 1, 1, 2, 2, 2,
    1,
  ];
  const UPPER_START = 65;
  const letterStrokeArr = string
    .split('')
    .map((letter) => strokeNum[letter.charCodeAt() - UPPER_START]);

  while (letterStrokeArr.length > 1) {
    const arrLen = letterStrokeArr.length;
    for (let i = 0; i < Math.trunc(arrLen / 2); i++) {
      const subtotal = letterStrokeArr
        .splice(0, 2)
        .reduce((acc, v) => (acc + v) % 10);
      letterStrokeArr.push(subtotal);
    }
  }

  return letterStrokeArr[0] % 2 ? "I'm a winner!" : "You're the winner?";
}

console.log(solution(input[0]));

// 통과(for문으로 인덱스만 조작, Map 활용)
function solution(s) {
    const dic = { A: 3, B: 2, C: 1, D: 2, E: 3, F: 3, G: 3, H: 3, I: 1, J: 1, K: 3, L: 1, M: 3, N: 3, O: 1, P: 2, Q: 2, R: 2, S: 1, T: 2, U: 1, V: 1, W: 2, X: 2, Y: 2, Z: 1 };
    let arr = [];
    for (ch of s) arr.push(dic[ch]);
    
    while (arr.length > 1) {
        const tmp = [];
        for (let i = 0; i < arr.length; i += 2) tmp.push(i + 1 < arr.length ? (arr[i] + arr[i + 1]) % 10 : arr[i]);
        arr = tmp;
    }
    
    return arr[0] % 2 == 1 ? "I'm a winner!" : "You're the winner?";
}