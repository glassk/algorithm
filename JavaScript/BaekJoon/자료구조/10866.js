const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...inputs] = fs.readFileSync(filePath).toString().trim().split(/\s/);

const results = [];
const len = inputs.length;
const deque = [];
for (let i = 0; i < len; i++) {
  switch (inputs[i]) {
    case 'push_front':
      deque.unshift(inputs[i + 1]);
      break;
    case 'push_back':
      deque.push(inputs[i + 1]);
      break;
    case 'pop_front':
      results.push(deque.length ? deque.shift() : -1);
      break;
    case 'pop_back':
      results.push(deque.length ? deque.pop() : -1);
      break;
    case 'size':
      results.push(deque.length);
      break;
    case 'empty':
      results.push(deque.length === 0 ? 1 : 0);
      break;
    case 'front':
      results.push(deque.length ? deque[0] : -1);
      break;
    case 'back':
      results.push(deque.length ? deque[deque.length - 1] : -1);
      break;
  }
}

console.log(results.join('\n'));
