// 1. 세 수 중 최솟값
const solution = (a, b, c) => {
  return Math.min(a, b, c);
};

console.log(solution(6, 5, 11)); // 5

// 2. 삼각형 판별하기
const solution = (a, b, c) => {
  // 풀이1: 오름차순 정렬
  const lengths = [a, b, c].sort((a, b) => a - b);
  if (lengths[2] < lengths[0] + lengths[1]) return 'YES';
  else return 'NO';

  // 풀이2: 합과 최댓값 차 이용
  const sum = a + b + c;
  const max = Math.max(a, b, c);
  if (max < sum - max) return 'YES';
  else return 'NO';
};

console.log(solution(6, 7, 11)); // YES
console.log(solution(13, 33, 17)); // NO

// 3. 연필 개수
const solution = (n) => {
  const DOZEN = 12;
  return Math.ceil(n / DOZEN);
};

console.log(solution(25)); // 3
console.log(solution(178)); // 15

// 4. 1부터 N까지 합 출력하기
const solution = (n) => {
  // 풀이1: 등차수열
  return (n * (n + 1)) / 2;

  // 풀이2: for문
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
};

console.log(solution(6)); // 21
console.log(solution(10)); // 55

// 5. 최솟값 구하기
const solution = (arr) => {
  // 풀이1: Math.min
  return Math.min(...arr);

  // 풀이2: Math.min.apply
  return Math.min.apply(null, arr);

  // 풀이3: for문
  let min = Number.MAX_SAFE_INTEGER;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (min > arr[i]) min = arr[i];
  }
  return min;
};

console.log(solution([5, 3, 7, 11, 2, 15, 17])); // 2

// 6. 홀수
const solution = (arr) => {
  // 풀이1: filter, reduce, Math.min
  const odds = arr.filter((v) => v % 2 === 1);
  const oddSum = odds.reduce((acc, val) => acc + val, 0);
  const minOdd = Math.min(...odds);
  return [oddSum, minOdd];

  // 풀이2: for-of문
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let num of arr) {
    if (num % 2 === 1) {
      sum += num;
      if (num < min) min = num;
    }
  }
  return [sum, min];
};

console.log(solution([12, 77, 38, 41, 53, 92, 85])); // [256, 41]

// 7. 10부제
const solution = (n, arr) => {
  let answer = 0;
  const COUNT = 7;
  // 풀이1: for문
  for (let i = 0; i < COUNT; i++) {
    if (arr[i] % 10 === n) answer++;
  }

  // 풀이2: for-of문
  for (let num of arr) {
    if (num % 10 === n) answer++;
  }

  return answer;
};

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33])); // 3
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30])); // 3

// 8. 일곱 난쟁이
const solution = (arr) => {
  let answer = [...arr];
  const sum = answer.reduce((acc, val) => acc + val, 0);
  const TARGET = 100;
  const len = answer.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (sum - (answer[i] + answer[j]) === TARGET) {
        // ✅ j 먼저, i 나중에 splice
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }

  return answer;
};

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13])); // [20, 7, 23, 19, 10, 8, 13]

// 9. A를 #으로
const solution = (str) => {
  // 풀이1: for문
  const A = 'A',
    SHARP = '#';
  let answer = '';
  const len = str.length;
  for (let i = 0; i < len; i++) {
    answer += str[i] === A ? SHARP : str[i];
  }
  return answer;

  // 풀이2: replace, 정규표현식
  return str.replace(/A/g, SHARP);
};

console.log(solution('BANANA')); // B#N#N#

// 10. 문자 찾기
const solution = (str, char) => {
  // 풀이1: for문
  let answer = 0;
  const len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] === char) answer++;
  }
  return answer;

  // 풀이2: split
  return str.split(char).length - 1;
};

console.log(solution('COMPUTERPROGRAMMING', 'R')); // 3

// 11. 대문자 찾기
const solution = (str) => {
  // 풀이1: match, 정규표현식
  return str.match(/[A-Z]/g).length;

  // 풀이2: ASCII 코드, charCodeAt
  let answer = 0;
  for (let char of str) {
    let code = char.charCodeAt();
    if (code >= 65 && code <= 90) answer++;
  }
  return answer;

  // 풀이3: toUpperCase
  let answer = 0;
  for (let char of str) {
    if (char === char.toUpperCase()) answer++;
  }
  return answer;
};

console.log(solution('KoreaTimeGood')); // 3

// 12. 대문자로 통일
const solution = (str) => {
  // 풀이1: toUpperCase
  return str.toUpperCase();

  // 풀이2: ASCII 코드, charCodeAt, fromCharCode
  let answer = '';
  for (let char of str) {
    const code = char.charCodeAt();
    if (code >= 97 && code <= 122) answer += String.fromCharCode(code - 32);
    else answer += char;
  }
  return answer;

  // 풀이3: toLowerCase, toUpperCase
  let answer = '';
  for (let char of str) {
    if (char === char.toLowerCase()) answer += char.toUpperCase();
    else answer += char;
  }
  return answer;
};

console.log(solution('ItisTimeToStudy')); // ITISTIMETOSTUDY

// 13. 대소문자 변환
const solution = (str) => {
  let answer = '';
  for (let char of str) {
    if (char === char.toUpperCase()) answer += char.toLowerCase();
    else if (char === char.toLowerCase()) answer += char.toUpperCase();
  }
  return answer;
};

console.log(solution('StuDY')); // sTUdy

// 14. 가장 긴 문자열
const solution = (n, arr) => {
  let maxLen = 0;
  let answer;
  for (let str of arr) {
    const len = str.length;
    if (len > maxLen) {
      maxLen = len;
      answer = str;
    }
  }
  return answer;
};

console.log(solution(5, ['teacher', 'time', 'student', 'beautiful', 'good']));

// 15. 가운데 문자 출력
const solution = (str) => {
  const len = str.length;
  const start = Math.floor(len / 2);
  if (len % 2) return str.substr(start, 1);
  else return str.substr(start - 1, 2);
};

console.log(solution('study')); // u
console.log(solution('good')); // oo

// 16. 중복문자제거
const solution = (str) => {
  // 풀이1: Set, split, join
  return [...new Set(str.split(''))].join('');

  // 풀이2: indexOf
  let answer = '';
  const len = str.length;
  for (let i = 0; i < len; i++) {
    if (str.indexOf(str[i]) === i) answer += str[i];
  }
  return answer;
};

console.log(solution('ksekkset')); // kset

// BONUS: 문자 개수 세기
const solution = (str, char) => {
  let answer = 0;
  let position = str.indexOf(char);

  while (position !== -1) {
    answer++;
    position = str.indexOf(char, position + 1);
  }

  return answer;
};

console.log(solution('ksekkset', 'k')); // 3

// 17. 중복단어제거
const solution = (n, arr) => {
  // 풀이1: Set
  return [...new Set(arr)];

  // 풀이2: filter, indexOf
  return arr.filter((str, idx) => {
    if (arr.indexOf(str) === idx) return str;
  });
};

console.log(solution(5, ['good', 'time', 'good', 'time', 'student'])); // ['good', 'time', 'student']
