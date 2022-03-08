// 18258 큐 2
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  createNode(value, prev, next) {
    return {
      value,
      prev,
      next,
    };
  }

  push(value) {
    const curNode = this.createNode(value, this.tail, this.head);
    if (this.head) {
      this.tail.next = curNode;
      this.head.prev = curNode;
      this.tail = curNode;
    } else {
      this.head = curNode;
      this.tail = curNode;
      curNode.prev = curNode;
      curNode.next = curNode;
    }
    this.size++;
  }

  pop() {
    if (this.size > 2) {
      const value = this.head.value;
      const newHead = this.head.next;
      this.head = newHead;
      newHead.prev = this.tail;
      this.tail.next = this.head;
      this.size--;
      return value;
    } else if (this.size === 2) {
      const value = this.head.value;
      this.head = this.tail;
      this.tail.prev = this.tail;
      this.tail.next = this.tail;
      this.size--;
      return value;
    } else if (this.size === 1) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      this.size--;
      return value;
    } else {
      return -1;
    }
  }

  empty() {
    return this.size ? 0 : 1;
  }

  front() {
    return this.head ? this.head.value : -1;
  }

  back() {
    return this.tail ? this.tail.value : -1;
  }
}

const myQueue = new Queue();
const output = [];

for (let i = 1; i < input.length; i++) {
  const [command, value] = input[i].split(' ');
  switch (command) {
    case 'push':
      myQueue.push(value);
      break;
    case 'pop':
      output.push(myQueue.pop());
      break;
    case 'size':
      output.push(myQueue.size);
      break;
    case 'empty':
      output.push(myQueue.empty());
      break;
    case 'front':
      output.push(myQueue.front());
      break;
    case 'back':
      output.push(myQueue.back());
      break;
  }
}
console.log(output.join('\n'));
