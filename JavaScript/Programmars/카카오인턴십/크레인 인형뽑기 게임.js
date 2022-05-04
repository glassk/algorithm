function solution(board, moves) {
  let answer = 0;
  const stack = [];
  const len = board.length;

  for (let m of moves) {
    for (let i = 0; i < len; i++) {
      if (board[i][m - 1] !== 0) {
        const target = board[i][m - 1];
        if (target === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(target);
        }
        board[i][m - 1] = 0;
        break;
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); // 4
