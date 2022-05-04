class Keypad {
  pad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  position(n) {
    return this.pad[n];
  }

  distance([x1, y1], [x2, y2]) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }
}

class Thumbs {
  constructor(handed, keypad) {
    this.left = '*';
    this.right = '#';
    this.handed = handed;
    this.keypad = keypad;
  }

  move(n) {
    if (n === 1 || n === 4 || n === 7) {
      return this.push('left', n);
    } else if (n === 3 || n === 6 || n === 9) {
      return this.push('right', n);
    } else {
      return this.select(n);
    }
  }

  push(direction, n) {
    if (direction === 'left') {
      this.left = n;
    } else {
      this.right = n;
    }
    return direction === 'left' ? 'L' : 'R';
  }

  select(n) {
    const left = this.keypad.position(this.left);
    const right = this.keypad.position(this.right);
    const target = this.keypad.position(n);

    const leftDiff = this.keypad.distance(left, target);
    const rightDiff = this.keypad.distance(right, target);

    if (leftDiff < rightDiff) {
      return this.push('left', n);
    } else if (leftDiff > rightDiff) {
      return this.push('right', n);
    } else {
      return this.push(this.handed, n);
    }
  }
}

function solution(numbers, hand) {
  let answer = '';
  const keypad = new Keypad();
  const thumbs = new Thumbs(hand, keypad);

  for (let num of numbers) {
    answer += thumbs.move(num);
  }

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')); // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')); // "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right')); // "LLRLLRLLRL"
