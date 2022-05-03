// DFS
function solution(board) {
  let answer = 0;
  const len = board.length;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function DFS(x, y) {
    board[x][y] = 0;
    for (let k = 0; k < 8; k++) {
      const nextX = x + dx[k];
      const nextY = y + dy[k];
      if (
        nextX >= 0 &&
        nextX < len &&
        nextY >= 0 &&
        nextY < len &&
        board[nextX][nextY] === 1
      ) {
        DFS(nextX, nextY);
      }
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] === 1) {
        answer++;
        DFS(i, j);
      }
    }
  }

  return answer;
}

console.log(
  solution([
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
  ])
); // 5

// BFS
function solution(board) {
  let answer = 0;
  const len = board.length;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  const queue = [];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        queue.push([i, j]);
        answer++;

        while (queue.length) {
          let [x, y] = queue.shift();
          for (let k = 0; k < 8; k++) {
            const nextX = x + dx[k];
            const nextY = y + dy[k];
            if (
              nextX >= 0 &&
              nextX < len &&
              nextY >= 0 &&
              nextY < len &&
              board[nextX][nextY] === 1
            ) {
              board[nextX][nextY] = 0;
              queue.push([nextX, nextY]);
            }
          }
        }
      }
    }
  }

  return answer;
}
