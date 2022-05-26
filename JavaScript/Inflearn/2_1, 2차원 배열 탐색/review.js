// 1. 큰 수 출력하기
const solution = (n, arr) => {
  // 풀이1: 배열 push
  const answer = [arr[0]];
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;

  // 풀이2: filter
  return arr.filter((val, idx) => {
    if (idx === 0 || val > arr[idx - 1]) return val;
  });
};

console.log(solution(6, [7, 3, 9, 5, 6, 12])); // [7, 9, 6, 12]

// 2. 보이는 학생
const solution = (n, arr) => {
  let max = 0;
  let answer = 0;
  for (let height of arr) {
    if (height > max) {
      max = height;
      answer++;
    }
  }

  return answer;
};

console.log(solution(8, [130, 135, 148, 140, 145, 150, 150, 153])); // 5

// 3. 가위 바위 보
const solution = (n, arrA, arrB) => {
  const SCISSORS = 1,
    ROCK = 2,
    PAPER = 3;
  const D = 'D',
    A = 'A',
    B = 'B';

  const getRoundWinner = (a, b) => {
    // ✅ A가 이기는 경우만 if로 처리
    if (
      (a === ROCK && b === SCISSORS) ||
      (a === SCISSORS && b === PAPER) ||
      (a === PAPER && b === ROCK)
    )
      return A;
    else return B;
  };

  const answer = [];
  for (let i = 0; i < n; i++) {
    const a = arrA[i],
      b = arrB[i];
    if (a === b) answer.push(D);
    else {
      const winner = getRoundWinner(a, b);
      answer.push(winner === A ? A : B);
    }
  }

  return answer;
};

console.log(solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3])); // [A, B, A, B, D]

// 4. 점수계산
const solution = (n, arr) => {
  let answer = 0;
  let bonus = 1;
  const RIGHT = 1,
    WRONG = 0;
  for (let problem of arr) {
    if (problem === RIGHT) {
      answer += bonus++;
    } else if (problem === WRONG) {
      bonus = 1;
    }
  }

  return answer;
};

console.log(solution(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0])); // 10

// 5. 등수구하기
const solution = (n, arr) => {
  const answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] < arr[j]) answer[i]++;
    }
  }

  return answer;
};

console.log(solution(5, [87, 89, 92, 100, 76])); // [4, 3, 2, 1, 5];

// 6. 격자판 최대합
const solution = (n, arr) => {
  let answer = 0;

  let row, col;
  for (let i = 0; i < n; i++) {
    (row = 0), (col = 0);
    for (let j = 0; j < n; j++) {
      row += arr[i][j];
      col += arr[j][i];
    }
    answer = Math.max(answer, row, col);
  }

  let leftCross = 0,
    rightCross = 0;
  for (let i = 0; i < n; i++) {
    leftCross += arr[i][i];
    rightCross += arr[i][n - 1 - i];
  }
  answer = Math.max(answer, leftCross, rightCross);

  return answer;
};

console.log(
  solution(5, [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
); // 155

// 7. 봉우리
const solution = (n, arr) => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const DIRECTION = 4;
  let answer = 0;

  const isRightIndex = (index) => {
    return index >= 0 && index < n;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const current = arr[i][j];
      let flag = 1;
      for (let k = 0; k < DIRECTION; k++) {
        const x = i + dx[k],
          y = j + dy[k];
        if (isRightIndex(x) && isRightIndex(y) && arr[x][y] > current) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
};

console.log(
  solution(5, [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
); // 10
