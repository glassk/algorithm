// 1. 올바른 괄호
const solution = (str) => {
  const stack = [];
  for (let item of str) {
    if (item === '(') stack.push();
    else if (item === ')') {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }
  if (stack.length === 0) return 'YES';
};

console.log(solution('(()(()))(()')); // NO

// 2. 괄호문자제거
const solution = (str) => {
  const stack = [];
  let answer = '';
  // 풀이1: answer에 문자 저장
  for (let item of str) {
    if (item === '(') stack.push('(');
    else if (item === ')') stack.pop();
    else {
      if (stack.length === 0) answer += item;
    }
  }

  // 풀이2: stack에 문자 저장
  for (item of str) {
    if (item === ')') {
      while (stack.pop() !== '(');
    } else stack.push(item);
  }
  answer = stack.join('');

  return answer;
};

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)')); // EFLM

// 3. 크레인 인형뽑기
const solution = (board, moves) => {
  let answer = 0;
  const stack = [];
  const boardLen = board.length;
  let num;
  for (let move of moves) {
    for (let i = 0; i < boardLen; i++) {
      if (board[i][move - 1]) {
        num = board[i][move - 1];
        board[i][move - 1] = 0;
        if (stack.length > 0 && stack[stack.length - 1] === num) {
          answer += 2;
          stack.pop();
        } else stack.push(num);
        break; // ✅ 인형 꺼냈으면 다음 moves로
      }
    }
  }

  return answer;
};

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); // 4

// 4. 후위식 연산(postfix)
const solution = (exp) => {
  const operate = (a, b, op) => {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
    }
  };

  const nums = [];
  for (let item of exp) {
    if (isNaN(item)) {
      const num2 = nums.pop();
      const num1 = nums.pop();
      nums.push(operate(num1, num2, item));
    } else {
      nums.push(+item);
    }
  }

  return nums[0];
};

console.log(solution('352+*9-')); // 12

// 5. 쇠막대기
const solution = (exp) => {
  let answer = 0;
  const stack = [];
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === '(') stack.push(exp[i]);
    else {
      stack.pop();
      if (exp[i - 1] === '(') answer += stack.length;
      else answer++; // ✅ 쇠막대기 끝 의미
    }
  }

  return answer;
};

console.log(solution('()(((()())(())()))(())')); // 17
console.log(solution('(((()(()()))(())()))(()())')); // 24

// 6. 공주 구하기
const solution = (n, k) => {
  const queue = Array.from({ length: n }, (v, i) => i + 1);
  // 풀이1: count 변수로 k 카운트
  let count = 0;
  let current;
  while (queue.length > 1) {
    current = queue.shift();
    count++;
    if (count === k) count = 0;
    else queue.push(current);
  }
  return queue[0];

  // ✅ 풀이2: for문으로 k 카운트
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
};

console.log(solution(8, 3)); // 7

// 7. 교육과정 설계
const solution = (must, plan) => {
  const orders = must.split('');
  for (let subject of plan) {
    // 풀이1: 첫 번째 원소와 일치하면 shift (끝까지 순회하므로 비효율적))
    if (subject === orders[0]) {
      orders.shift();
    }
    // 풀이2: includes()로 큐에 있는지 확인한 후 shift
    // ✅ shift한 값이 subject와 일치하지 않으면 바로 종료
    if (orders.includes(subject)) {
      if (subject !== orders.shift()) return 'NO';
    }
  }
  return orders.length ? 'NO' : 'YES';
};

console.log(solution('CBA', 'CBDAGE')); // YES
