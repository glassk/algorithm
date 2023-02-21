// 7576 토마토 https://www.acmicpc.net/problem/7576
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [m, n] = input[0].split(' ').map(Number);
const tomatoes = input.slice(1).map((row) => row.split(' ').map(Number));

console.log(solution(m, n, tomatoes));

// 며칠이 지나면 토마토가 모두 익는지 최소 일수 구하기
function solution(m, n, tomatoes) {
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
      this.front += 1;
      return value;
    }

    size() {
      return this.rear - this.front;
    }
  }

  let answer = 0;

  function bfs() {
    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0, -1];
    const queue = new Queue();
    let ny, nx, y, x;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (tomatoes[i][j] === 1) {
          queue.enqueue([i, j, 0]);
        }
      }
    }

    while (queue.size()) {
      [y, x, day] = queue.dequeue();
      for (let i = 0; i < 4; i++) {
        ny = y + dy[i];
        nx = x + dx[i];
        if (ny >= 0 && ny < n && nx >= 0 && nx < m && tomatoes[ny][nx] === 0) {
          tomatoes[ny][nx] = 1;
          if (answer < day + 1) answer = day + 1;
          queue.enqueue([ny, nx, day + 1]);
        }
      }
    }
  }

  bfs();

  for (const row of tomatoes) {
    if (row.includes(0)) return -1;
  }

  return answer;
}
