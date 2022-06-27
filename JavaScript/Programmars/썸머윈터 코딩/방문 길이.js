// 문제: https://programmers.co.kr/learn/courses/30/lessons/49994
// 일부 오답
const solution = (dirs) => {
  const move = {
    U: [-1, 0],
    D: [1, 0],
    R: [0, 1],
    L: [0, -1],
  };
  const isRightPosition = (x, y) => {
    return x >= 0 && x <= 10 && y >= 0 && y <= 10;
  };

  const check = Array.from(Array(11), () => Array(11).fill(0));
  let answer = 0;
  let currentX = 5;
  let currentY = 5;
  dirs.split('').forEach((dir) => {
    const [x, y] = move[dir];
    if (isRightPosition(x + currentX, y + currentY)) {
      currentX += x;
      currentY += y;
      if (check[currentX][currentY] === 0) {
        answer++;
        check[currentX][currentY] = 1;
      }
    }
  });
  console.table(check);

  return answer;
};

console.log(solution('ULURRDLLU')); // 7
// console.log(solution('LULLLLLLU')); // 7
