const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...inputs] = fs.readFileSync(filePath).toString().trim().split(/\s/);

const stack = [];
const results = [];
const len = inputs.length;
for (let i = 0; i < len; i++) {
  switch (inputs[i]) {
    case 'push':
      stack.push(+inputs[i + 1]);
      break;
    case 'pop':
      results.push(stack.length ? stack.pop() : -1);
      break;
    case 'size':
      results.push(stack.length);
      break;
    case 'empty':
      results.push(stack.length ? 0 : 1);
      break;
    case 'top':
      results.push(stack.length ? stack[stack.length - 1] : -1);
      break;
  }
}
console.log(results.join('\n'));
