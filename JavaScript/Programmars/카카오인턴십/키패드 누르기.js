class Keypad {
  position(n) {
    switch (n) {
      case '*':
        return [3, 0];
      case 0:
        return [3, 1];
      case '#':
        return [3, 2];
      default:
        return [Math.floor((n - 1) / 3), (n - 1) % 3];
    }
  }

  distance([x1, y1], [x2, y2]) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }
}

class Thumbs {
  constructor(handed) {
    this.left = '*';
    this.right = '#';
    this.handed = handed;
  }

  move(n) {
    if (n === 1 || n === 4 || n === 7) {
      return this.push('left', n);
    } else if (n === 3 || n === 6 || n === 6) {
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
    const keypad = new Keypad();

    const left = keypad.position(this.left);
    const right = keypad.position(this.right);
    const target = keypad.position(n);

    const leftDiff = keypad.distance(left, target);
    const rightDiff = keypad.distance(right, target);

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
  const fingers = new Thumbs(hand);

  for (let num of numbers) {
    answer += fingers.move(num);
  }

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')); // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')); // "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right')); // "LLRLLRLLRL"
