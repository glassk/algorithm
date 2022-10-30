// 3번 구름이의 여행
// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let n, m, k;
  const input = [];
  for await (const line of rl) {
    if (m) {
      input.push(line.split(' ').map((v) => +v));
      if (input.length === m) rl.close();
    } else {
      [n, m, k] = line.split(' ').map((v) => +v);
    }
  }
  console.log(solution(n, m, k, input));

  process.exit();
})();

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

function solution(n, m, k, arr) {
  const graph = Array.from(Array(n + 1), () => []);
  arr.forEach(([u, v]) => {
    graph[u].push(v);
    graph[v].push(u);
  });

  const queue = new Queue();
  const visited = Array.from({ length: n + 1 }, () => -1);
  queue.enqueue(1);
  visited[1] = 0;

  while (queue.size()) {
    const current = queue.dequeue();
    for (const next of graph[current]) {
      if (visited[next] === -1) {
        queue.enqueue(next);
        visited[next] = visited[current] + 1;
      }
    }
  }

  return visited[n] >= 1 && visited[n] <= k ? 'YES' : 'NO';
}

console.log(
  solution(6, 6, 2, [
    [1, 4],
    [4, 2],
    [2, 6],
    [4, 3],
    [1, 2],
    [3, 1],
  ])
); // YES
console.log(
  solution(6, 6, 2, [
    [1, 2],
    [2, 3],
    [3, 4],
    [3, 5],
    [5, 6],
    [5, 2],
  ])
); // NO
console.log(solution(3, 3, 1, [[1, 2]])); // NO
