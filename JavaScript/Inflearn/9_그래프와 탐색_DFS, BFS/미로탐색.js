function solution(board) {
  let answer = 0;
  const len = board.length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function DFS(x, y) {
    if (x === len - 1 && y === len - 1) answer++;
    else {
      for (let i = 0; i < 4; i++) {
        const tempX = x + dx[i];
        const tempY = y + dy[i];
        if (
          tempX >= 0 &&
          tempX <= 6 &&
          tempY >= 0 &&
          tempY <= 6 &&
          board[tempX][tempY] === 0
        ) {
          board[tempX][tempY] = 1;
          DFS(tempX, tempY);
          board[tempX][tempY] = 0;
        }
      }
    }
  }

  board[0][0] = 1;
  DFS(0, 0);

  return answer;
}

console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ])
); // 8
