// 1. 자릿수의 합
const solution = (n, arr) => {
  // 풀이1: 문자열로 변환, split, reduce
  let answer = 0;
  let maxSum = 0;
  for (let num of arr) {
    const sum = String(num)
      .split('')
      .reduce((acc, val) => acc + +val, 0);
    if (sum >= maxSum && num > answer) {
      maxSum = sum;
      answer = num;
    }
  }
  return answer;

  // 풀이2: 나머지 연산
  let answer,
    maxSum = 0;
  for (let num of arr) {
    let sum = 0,
      tempNum = num;
    while (tempNum) {
      sum += tempNum % 10;
      tempNum = Math.floor(tempNum / 10);
    }
    if (sum > maxSum) {
      maxSum = sum;
      answer = num;
    } else if (sum === maxSum && num > answer) {
      answer = num;
    }
  }
  return answer;
};

console.log(solution(7, [128, 460, 603, 40, 521, 137, 123])); // 137

// 2. 뒤집은 소수
const solution = (n, arr) => {
  const isPrime = (num) => {
    if (num === 1) return false;
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const answer = [];
  // 풀이1: 문자열로 변환
  for (let num of arr) {
    const reversed = parseInt(String(num).split('').reverse().join(''));
    if (isPrime(reversed)) answer.push(reversed);
  }

  // 풀이2: 나머지 연산
  for (let num of arr) {
    let reversed = 0;
    while (num) {
      reversed = reversed * 10 + (num % 10);
      num = parseInt(num / 10);
    }
    if (isPrime(reversed)) answer.push(reversed);
  }

  return answer;
};

console.log(solution(9, [32, 55, 62, 20, 250, 370, 200, 30, 100])); // [ 23, 2, 73, 2, 3 ]

// 3. 멘토링
const solution = (n, m, arr) => {
  // ✅ 멘토-멘티 경우의 수에 대해 모두 카운트 (다시 풀어보기!)
  let answer = 0;
  for (let mentoId = 1; mentoId <= n; mentoId++) {
    for (let menteeId = 1; menteeId <= n; menteeId++) {
      let testCount = 0;
      for (let round = 0; round < m; round++) {
        let mentoRank = 0,
          menteeRank = 0;
        for (let rank = 0; rank < n; rank++) {
          if (arr[round][rank] === mentoId) mentoRank = rank;
          if (arr[round][rank] === menteeId) menteeRank = rank;
        }
        if (mentoRank < menteeRank) testCount++;
      }
      if (testCount === m) answer++;
    }
  }

  return answer;
};

console.log(
  solution(4, 3, [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
); // 3

// 4. 졸업 선물
const solution = (n, m, arr) => {
  // 풀이1: 선물 가격이 가장 비싼 것에 바로 쿠폰 적용 (최댓값 장담할 수 없음))
  arr.sort((a, b) => b[0] - a[0]);
  arr[0][0] = arr[0][0] / 2;
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  let answer = 0;
  let balance = m;
  for (let gift of arr) {
    const price = gift[0] + gift[1];
    if (price <= balance) {
      balance -= price;
      answer++;
    } else break;
  }

  return answer;

  // ✅ 풀이2: 모든 선물에 대해 쿠폰 적용해보고 최대 학생수 구하기
  let answer = 0;

  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let discount = 0; discount < n; discount++) {
    let budget = m - (arr[discount][0] / 2 + arr[discount][1]);
    let giftCount = 1;
    for (let giftId = 0; giftId < n; giftId++) {
      if (giftId !== discount) {
        if (arr[giftId][0] + arr[giftId][1] > budget) break;
        else {
          budget -= arr[discount][0] + arr[giftId][1];
          giftCount++;
        }
      }
    }
    answer = Math.max(answer, giftCount);
  }

  return answer;
};

console.log(
  solution(5, 28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
); // 4

// 5. K번째 큰 수
const solution = (n, k, arr) => {
  const result = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        result.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  const sorted = [...result].sort((a, b) => b - a);
  return sorted[k - 1];
};

console.log(solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42])); // 143
