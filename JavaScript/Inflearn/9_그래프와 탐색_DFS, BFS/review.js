// 1. 경로 탐색(인접행렬)
const solution = (n, m, arr) => {
  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  const check = Array.from({ length: n + 1 }, () => 0);
  let answer = 0;

  for (let [x, y] of arr) {
    graph[x][y] = 1;
  }

  const dfs = (v) => {
    if (v === n) answer++;
    else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && check[i] === 0) {
          check[i] = 1;
          dfs(i);
          check[i] = 0;
        }
      }
    }
  };

  check[1] = 1; // ✅
  dfs(1);

  return answer;
};

console.log(
  solution(5, 9, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
); // 6

// 2. 경로 탐색(인접리스트) (✅ 다시 풀어보기)
const solution = (n, m, arr) => {
  const graph = Array.from(Array(n + 1), () => Array());
  const check = Array.from({ length: n + 1 }, () => 0);
  let answer = 0;

  for (let [x, y] of arr) {
    graph[x].push(y);
  }

  const dfs = (v) => {
    if (v === n) answer++;
    else {
      for (let node of graph[v]) {
        if (check[node] === 0) {
          check[node] = 1;
          dfs(node);
          check[node] = 0;
        }
      }
    }
  };

  check[1] = 1;
  dfs(1);

  return answer;
};

console.log(
  solution(5, 9, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
); // 6

// 3. 미로탐색(DFS)
const solution = (board) => {
  let answer = 0;
  const len = board.length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const isRightPosition = (x, y) => {
    return x >= 0 && x < len && y >= 0 && y < len;
  };

  let nextX, nextY;
  const dfs = (x, y) => {
    if (x === len - 1 && y === len - 1) answer++;
    else {
      for (let i = 0; i < 4; i++) {
        nextX = x + dx[i];
        nextY = y + dy[i];
        if (isRightPosition(nextX, nextY) && board[nextX][nextY] === 0) {
          board[nextX][nextY] = 1;
          dfs(nextX, nextY);
          board[nextX][nextY] = 0;
        }
      }
    }
  };

  board[0][0] = 1; // ✅
  dfs(0, 0);

  return answer;
};

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

// 4. 이진트리 너비우선탐색(BFS)
const solution = (n) => {
  let answer = '';
  const queue = [];
  queue.push(1);

  let v;
  while (queue.length > 0) {
    v = queue.shift();
    answer += v + ' ';
    for (let next of [v * 2, v * 2 + 1]) {
      if (next > n) continue;
      queue.push(next);
    }
  }

  return answer;
};

console.log(solution(7)); // 1 2 3 4 5 6 7

// 5. 송아지 찾기(BFS, 상태트리탐색)
// 풀이1: 거리 배열 사용 (BFS x)
const solution = (s, e) => {
  const check = Array.from({ length: 10001 }, () => 0);
  const distance = Array.from({ length: 10001 }, () => 0);
  const queue = [];
  queue.push(s);
  check[s] = 1;
  distance[s] = 0;

  let v;
  while (queue.length > 0) {
    v = queue.shift();
    for (let next of [v - 1, v + 1, v + 5]) {
      if (next === e) return distance[v] + 1;
      if (next >= 1 && next <= 10000 && check[next] === 0) {
        check[next] = 1;
        queue.push(next);
        distance[next] = distance[v] + 1;
      }
    }
  }
};

// 풀이2: 레벨 탐색 (✅ 다시 풀어보기)
const solution = (s, e) => {
  let answer = 0;
  let level = 0;
  const check = Array.from({ length: 10001 }, () => 0);
  const queue = [];
  queue.push(s);
  check[s] = 1;

  let v, len;
  while (queue.length > 0) {
    len = queue.length;
    for (let i = 0; i < len; i++) {
      v = queue.shift();
      for (let next of [v - 1, v + 1, v + 5]) {
        if (next === e) return level + 1;
        if (next >= 1 && next <= 10000 && check[next] === 0) {
          check[next] = 1;
          queue.push(next);
        }
      }
    }
    level++;
  }

  return answer;
};

console.log(solution(5, 14)); // 3
console.log(solution(8, 3)); //5

// 6. 섬나라 아일랜드(DFS) (✅ 다시 풀어보기)
const solution = (n, board) => {
  let answer = 0;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  const queue = [];

  const isRightPosition = (x, y) => {
    return x >= 0 && x < n && y >= 0 && y < n;
  };

  let x, y, nextX, nextY;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        queue.push([i, j]);
        answer++;

        while (queue.length > 0) {
          [x, y] = queue.shift();
          for (let k = 0; k < 8; k++) {
            nextX = x + dx[k];
            nextY = y + dy[k];
            if (isRightPosition(nextX, nextY) && board[nextX][nextY] === 1) {
              board[nextX][nextY] = 0;
              queue.push([nextX, nextY]);
            }
          }
        }
      }
    }
  }

  return answer;
};

console.log(
  solution(7, [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
  ])
); // 5
