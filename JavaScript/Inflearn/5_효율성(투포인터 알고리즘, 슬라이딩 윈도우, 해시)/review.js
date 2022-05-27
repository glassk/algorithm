// 1. 두 배열 합치기
const solution = (n, arrN, m, arrM) => {
  const answer = [];
  let pointerN = 0,
    pointerM = 0;
  while (pointerN < n && pointerM < m) {
    if (arrN[pointerN] < arrM[pointerM]) {
      answer.push(arrN[pointerN++]);
    } else {
      answer.push(arrM[pointerM++]);
    }
  }
  // 풀이1: slice
  if (pointerN < n) {
    answer.push(...arrN.slice(pointerN, n));
  }
  if (pointerM < m) {
    answer.push(...arrM.slice(pointerM, m));
  }
  // 풀이2: while문
  while (pointerN < n) answer.push(arrN[pointerN++]);
  while (pointerM < m) answer.push(arrM[pointerM++]);

  return answer;
};

console.log(solution(3, [1, 3, 5], 5, [2, 3, 6, 7, 9])); // [1, 2, 3, 3, 5, 6, 7, 9]

// 2. 공통원소 구하기
const solution = (n, arrN, m, arrM) => {
  let pointerN = 0,
    pointerM = 0;
  // ✅ 배열 오름차순 정렬 전제
  arrN.sort((a, b) => a - b);
  arrM.sort((a, b) => a - b);
  const answer = [];
  while (pointerN < n && pointerM < m) {
    if (arrN[pointerN] === arrM[pointerM]) {
      answer.push(arrN[pointerN++]);
      pointerM++;
    } else if (arrN[pointerN] > arrM[pointerM]) {
      pointerM++;
    } else pointerN++;
  }
  return answer;
};

console.log(solution(5, [1, 3, 9, 5, 2], 5, [3, 2, 5, 7, 8])); // [2, 3, 5]

// 3. 연속 부분수열 1
const solution = (n, m, arr) => {
  // ✅ 투포인터 알고리즘(start, end)
  let answer = 0,
    start = 0,
    sum = 0;
  for (let end = 0; end < n; end++) {
    sum += arr[end];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[start++];
      if (sum === m) answer++;
    }
  }

  return answer;
};

console.log(solution(8, 6, [1, 2, 1, 3, 1, 1, 1, 2])); // 3

// 4. 연속 부분수열 2
const solution = (n, m, arr) => {
  let answer = 0,
    start = 0,
    sum = 0;
  for (let end = 0; end < n; end++) {
    sum += arr[end];
    while (sum > m) {
      sum -= arr[start++];
    }
    // ✅ 마지막 원소의 인덱스가 end인 연속부분수열의 개수
    answer += end - start + 1;
  }

  return answer;
};

console.log(solution(5, 5, [1, 3, 1, 2, 3])); // 10

// 5. 최대 매출(슬라이딩 윈도우)
const solution = (n, k, arr) => {
  let sum = arr.slice(0, k).reduce((acc, val) => acc + val, 0);
  let answer = sum;
  for (let i = k; i < n; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(sum, answer);
  }

  return answer;
};

console.log(solution(10, 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15])); // 56

// 6. 학급 회장(해시)
const solution = (n, str) => {
  const symbolMap = new Map();
  for (let symbol of str) {
    symbolMap.set(symbol, (symbolMap.get(symbol) || 0) + 1);
  }

  let answer;
  let maxNum = 0;
  for (let [symbol, num] of symbolMap) {
    if (num > maxNum) {
      answer = symbol;
      maxNum = num;
    }
  }

  return answer;
};

console.log(solution(15, 'BACBACCACCBDEDE')); // C

// 7. 아나그램(해시)
const solution = (word1, word2) => {
  const charMap = new Map();
  for (let char of word1) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }
  for (let char of word2) {
    if (!charMap.has(char) || charMap.get(char) === 0) return 'NO';
    else charMap.set(char, charMap.get(char) - 1);
  }

  return 'YES';
};

console.log(solution('AbaAeCe', 'baeeACA')); // YES
console.log(solution('abaCC', 'Caaab')); // NO

// 8. 모든 아나그램 찾기(해시, 투포인터, 슬라이딩 윈도우)
const solution = (s, t) => {
  // ✅ 두 Map이 같은 Map인지 확인하기
  const isSameMap = (map1, map2) => {
    if (map1.size !== map2.size) return false;
    for (let [key, value] of map1) {
      if (!map2.has(key) || map2.get(key) !== value) return false;
    }
    return true;
  };

  const tMap = new Map();
  for (let char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  const tLen = t.length;
  const sMap = new Map();
  for (let i = 0; i < tLen - 1; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
  }

  const sLen = s.length;
  let answer = 0,
    left = 0;
  for (let i = tLen - 1; i < sLen; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    if (isSameMap(sMap, tMap)) answer++;

    sMap.set(s[left], sMap.get(s[left] || 0) - 1);
    if (sMap.get(s[left]) === 0) sMap.delete(s[left]);
    left++;
  }

  return answer;
};

console.log(solution('bacaAacba', 'abc')); // 3
