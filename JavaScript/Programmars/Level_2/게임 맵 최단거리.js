// 효율성 시간 초과 (DFS)
function solution(maps) {
  const rowLen = maps.length;
  const colLen = maps[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let answer = Number.MAX_SAFE_INTEGER;

  const isRightPosition = (x, y) => {
    return x >= 0 && x < rowLen && y >= 0 && y < colLen;
  };

  const dfs = (x, y, count) => {
    if (count >= answer) return;

    if (x === rowLen - 1 && y === colLen - 1) {
      answer = Math.min(answer, count);
    } else {
      for (let i = 0; i < 4; i++) {
        const nextX = x + dx[i];
        const nextY = y + dy[i];
        if (isRightPosition(nextX, nextY) && maps[nextX][nextY] === 1) {
          maps[nextX][nextY] = 0;
          dfs(nextX, nextY, count + 1);
          maps[nextX][nextY] = 1;
        }
      }
    }
  };

  dfs(0, 0, 1);

  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
); // 11
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
); // -1

// 효율성까지 통과 (거리 기록 배열 이용, BFS)
function solution(maps) {
  const rowLen = maps.length;
  const colLen = maps[0].length;

  const isRightPosition = (x, y) => {
    return x >= 0 && x < rowLen && y >= 0 && y < colLen;
  };

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const distance = Array.from(Array(rowLen), () => Array(colLen).fill(0));

  const queue = [];
  queue.push([0, 0]);
  maps[0][0] = 0;
  distance[0][0] = 1;

  let x, y, nextX, nextY;
  while (queue.length > 0) {
    [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      nextX = x + dx[i];
      nextY = y + dy[i];
      if (isRightPosition(nextX, nextY) && maps[nextX][nextY] === 1) {
        maps[nextX][nextY] = 0;
        distance[nextX][nextY] = distance[x][y] + 1;
        queue.push([nextX, nextY]);
      }
    }
  }

  return distance[rowLen - 1][colLen - 1] || -1;
}
