// 11725 트리의 부모 찾기 https://www.acmicpc.net/problem/11725
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const nodes = input.slice(1).map((v) => v.split(' ').map(Number));

console.log(solution(n, nodes));

// 트리의 루트 = 1
// 2번 노드부터 각 노드의 부모 구하기
function solution(n, nodes) {
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

  const tree = Array.from({ length: n + 1 }, () => []);
  const answer = [];

  for (const [a, b] of nodes) {
    tree[a].push(b);
    tree[b].push(a);
  }

  function bfs() {
    const queue = new Queue();
    // 1번 노드
    answer[1] = true;
    for (const next of tree[1]) {
      answer[next] = 1;
      queue.enqueue(next);
    }

    while (queue.size()) {
      const node = queue.dequeue();
      for (const next of tree[node]) {
        if (answer[next]) continue;
        answer[next] = node; // 부모 노드 번호
        queue.enqueue(next);
      }
    }
  }

  bfs();

  return answer.slice(2).join('\n').trim();
}
