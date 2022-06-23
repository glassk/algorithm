// 각 행, 열, 3x3 보드 내 1~9 중복없이 채워져있는지 확인
// 정확하게 풀었으면 YES 아니면 NO 출력
const solution = (board) => {
  const YES = 'YES';
  const NO = 'NO';
  const len = board.length;

  let numSet;
  for (let i = 0; i < len; i++) {
    numSet = new Set(board[i]);
    if (numSet.size !== len) return NO;
  }

  let check;
  for (let i = 0; i < len; i++) {
    check = Array.from({ length: len + 1 }, () => 0);
    for (let j = 0; j < len; j++) {
      if (check[board[i][j]] === 1) return NO;
      check[board[i][j]]++;
    }
  }

  for (let i = 0; i < len; i += 3) {
    for (let j = 0; j < len; j += 3) {
      check = Array.from({ length: len + 1 }, () => 0);
      for (let k = i; k < i + 3; k++) {
        for (let s = j; s < j + 3; s++) {
          if (check[board[k][s]] === 1) return NO;
          check[board[k][s]]++;
        }
      }
    }
  }

  return YES;
};

console.log(
  solution([
    [1, 4, 3, 6, 2, 8, 5, 7, 9],
    [5, 7, 2, 1, 3, 9, 4, 6, 8],
    [9, 8, 6, 7, 5, 4, 2, 3, 1],
    [3, 9, 1, 5, 4, 2, 7, 8, 6],
    [4, 6, 8, 9, 1, 7, 3, 5, 2],
    [7, 2, 5, 8, 6, 3, 9, 1, 4],
    [2, 3, 7, 4, 8, 1, 6, 9, 5],
    [6, 1, 9, 2, 7, 5, 8, 4, 3],
    [8, 5, 4, 3, 9, 6, 1, 2, 7],
  ])
); // YES
