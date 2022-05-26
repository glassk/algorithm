// 1. 회문 문자열
const solution = (str) => {
  const lowerStr = str.toLowerCase();
  // 풀이1: split, reverse, join
  return lowerStr === lowerStr.split().reverse().join() ? 'YES' : 'NO';

  // 풀이2: for문, 인덱스
  const len = str.length;
  const midIdx = Math.floor(len / 2);
  for (let i = 0; i < midIdx; i++) {
    if (str[i] === str[i - midIdx - 1]) return 'NO';
  }
  return 'YES';
};

console.log(solution('gooG')); // YES

// 2. 유효한 팰린드롬
const solution = (str) => {
  // ✅ replace로 불필요한 문자 제거
  const letters = str.toLowerCase().replace(/[^a-z]/g, '');
  return letters === letters.split('').reverse().join('') ? 'YES' : 'NO';
};

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof')); // YES

// 3. 숫자만 추출
const solution = (str) => {
  // 풀이1: replace, 정규표현식
  const nums = str.replace(/[^0-9]/g, '');
  return parseInt(nums);

  // 풀이2: for문, isNaN
  let nums = '';
  for (let char of str) {
    if (!isNaN(char)) nums += char;
  }
  return parseInt(nums);

  // 풀이3: parseInt 사용X
  let answer = 0;
  for (let char of str) {
    if (!isNaN(char)) answer = answer * 10 + Number(char);
  }
  return answer;
};

console.log(solution('g0en2T0s8eSoft')); // 208

// 4. 가장 짧은 문자거리
const solution = (s, t) => {
  let distance = 1000;
  const len = s.length;
  const answer = [];
  // ✅ for문 2개로 양방향 순회하면서 최소 거리 업데이트
  for (let i = 0; i < len; i++) {
    if (s[i] === t) {
      distance = 0;
      answer.push(distance);
    } else answer.push(++distance);
  }

  distance = 1000;
  for (let i = len - 1; i >= 0; i--) {
    if (s[i] === t) distance = 0;
    else answer[i] = Math.min(answer[i], ++distance);
  }

  return answer;
};

console.log(solution('teachermode', 'e')); // [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]

// 5. 문자열 압축
const solution = (str) => {
  const len = str.length;
  let lastChar = str[0];
  let count = 1;
  let answer = '';
  for (let i = 1; i < len; i++) {
    if (str[i] === lastChar) count++;
    else {
      answer += lastChar + (count === 1 ? '' : count);
      lastChar = str[i];
      count = 1;
    }
  }
  if (count) answer += lastChar;

  return answer;
};

console.log(solution('KKHSSSSSSSE')); // K2HS7E
