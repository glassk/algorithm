// 4396 지뢰 찾기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const boardLength = +input[0];
const hiddenBoard = [];
const currentBoard = [];
input.map((item, index) => {
  if (index >= 1 && index <= boardLength) hiddenBoard.push(item);
  else if (index > boardLength) currentBoard.push(item);
});

function countNearLandmind(row, col, hiddenBoard, boardLength) {
  let landMindCount = 0;
  const DIRECTION = 8;
  const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
  const dy = [-1, -1, -1, 0, 0, 1, 1, 1];

  for (let i = 0; i < DIRECTION; i++) {
    const tempRow = row + dy[i];
    const tempCol = col + dx[i];
    if (
      tempRow >= 0 && tempRow < boardLength &&
      tempCol >= 0 && tempCol < boardLength &&
      hiddenBoard[tempRow][tempCol] === '*'
    ) {
      landMindCount++;
    }
  }

  return landMindCount;
}

function solution(boardLength, hiddenBoard, currentBoard) {
  const answerBoard = [];
  let isLose = false;
  let row;

  for (let i = 0; i < boardLength; i++) {
    row = '';

    /**
     * TODO: 지뢰 선택했을 때 모든 지뢰 * 표시되도록 처리
     */
    for (let j = 0; j < boardLength; j++) {
      if (hiddenBoard[i][j] === '*' && currentBoard[i][j] === 'x') {
          row += '*';
          isLose = true;
      }
      else if (isLose === true && hiddenBoard[i][j] === '*') row += '*';
      else if (currentBoard[i][j] === '.') row += '.';
      else row += countNearLandmind(i, j, hiddenBoard, boardLength);
    }

    answerBoard.push(row);
  }

  return answerBoard;
}

solution(boardLength, hiddenBoard, currentBoard).map((item) =>
  console.log(item)
);