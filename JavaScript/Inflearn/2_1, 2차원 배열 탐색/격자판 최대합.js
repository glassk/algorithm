function solution(n, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let sumRow = sumCol = sumLeftCross = sumRightCross = 0;

  // 행의 합과 열의 합
  for (let i = 0; i < n; i++) {
    sumRow = sumCol = 0;
    for (let j = 0; j < n; j++) {
      sumRow += arr[i][j];
      sumCol += arr[j][i];
    }
    answer = Math.max(answer, sumRow, sumCol);
  }

  // 왼쪽, 오른쪽 대각선의 합
  for (let i = 0; i < n; i++) {
    sumLeftCross += arr[i][i];
    sumRightCross += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sumLeftCross, sumRightCross);

  return answer;
}

console.log(
  solution(5, [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
); // 155
