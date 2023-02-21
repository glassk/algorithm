// 14940 쉬운 최단거리 https://www.acmicpc.net/problem/14940
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const map = input.slice(1).map((row) => row.split(' ').map(Number));

console.log(solution(n, m, map));

// 각 지점에서 목표지점까지의 거리 출력
function solution(n, m, map) {
  const answer = Array.from({ length: n }, () => Array(m).fill(0));
  let goal; // 2 위치
  for (let i = 0; i < n; i++) {
    if (map[i].includes(2)) {
      goal = [i, map[i].indexOf(2)];
      break;
    }
  }

  class Queue {
    constructor() {
      this.queue = [];
      this.front = 0;
      this.rear = 0;
    }

    enqueue(value) {
      this.queue[this.rear++] = value;
    }

    dequeue() {
      const value = this.queue[this.front];
      delete this.queue[this.front];
      this.front++;
      return value;
    }

    size() {
      return this.rear - this.front;
    }
  }

  function bfs() {
    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0, -1];
    const queue = new Queue();
    let nextY, nextX;

    queue.enqueue(goal);

    while (queue.size()) {
      const [y, x] = queue.dequeue();
      for (let i = 0; i < 4; i++) {
        nextY = y + dy[i];
        nextX = x + dx[i];
        if (
          nextY >= 0 &&
          nextY < n &&
          nextX >= 0 &&
          nextX < m &&
          map[nextY][nextX] === 1
        ) {
          map[nextY][nextX] = 0;
          answer[nextY][nextX] = answer[y][x] + 1;
          queue.enqueue([nextY, nextX]);
        }
      }
    }
  }

  bfs();

  // 원래 갈 수 있는 땅 중 도달할 수 없는 위치는 -1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 1) answer[i][j] = -1;
    }
  }

  return answer.map((row) => row.join(' ')).join('\n');
}
