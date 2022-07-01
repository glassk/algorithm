// 문제: https://programmers.co.kr/learn/courses/30/lessons/17679?language=javascript
// 일부 케이스 오답
const solution = (m, n, board) => {
  let answer = 0; // 지워지는 블록 개수
  board = board.map((row) => row.split(''));
  const check = Array.from(Array(m), () => Array(n).fill(1));
  const dx = [0, 0, 1, 1];
  const dy = [0, 1, 0, 1];

  const isRightPosition = (row, col) => {
    return row >= 0 && row < m && col >= 0 && col < n;
  };

  const checkPop = (row, col) => {
    const target = board[row][col];
    let x, y;
    let flag = 0;
    for (let i = 1; i < 4; i++) {
      x = row + dx[i];
      y = col + dy[i];
      if (!isRightPosition(x, y) || board[x][y] !== target) {
        flag = 1;
        break;
      }
    }
    return flag === 0;
  };

  const pop = () => {
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (!checkPop(i, j)) continue;
        let x, y;
        for (let k = 0; k < 4; k++) {
          x = i + dx[k];
          y = j + dy[k];
          if (check[x][y] !== 0) {
            check[x][y] = 0;
            answer++;
          }
        }
      }
    }
  };

  const downFill = () => {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m - 1; j++) {
        if (check[j][i] === 1 && check[j + 1][i] === 0) {
          board[j + 1][i] = board[j][i];
          board[j][i] = 0;
          check[j][i] = 0;
          check[j + 1][i] = 1;
        }
      }
    }
  };

  let compare = answer;
  while (true) {
    pop();
    if (answer === compare) break;
    else {
      downFill();
      compare = answer;
    }
  }

  return answer;
};

console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF'])); // 14
console.log(
  solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ'])
); // 15
