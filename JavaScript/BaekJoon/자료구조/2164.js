const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const n = Number(fs.readFileSync(filePath).toString().trim());

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return false;
    }
    const data = this.head.data;
    this.head = this.head.next;
    this.length--;

    return data;
  }
}

const queue = new Queue();
for (let i = 1; i <= n; i++) {
  queue.enqueue(i);
}

while (queue.length > 1) {
  queue.dequeue();
  queue.enqueue(queue.dequeue());
}

console.log(queue.head.data);
