// nxn 격자판
// 격자의 행을 기준으로 왼쪽이나 오른쪽으로 회전시켜 위치 변경
// 2(행번호) 0(방향) 3(격자 수) -> 2번째 행을 왼쪽으로 3만큼 회전
// 방향: 0 왼쪽, 1 오른쪽
// m개 회전명령 실행 후 모래시계 영역 감 개수 출력
const solution = (n, board, m, rotations) => {
  rotations.forEach(([rowNum, direction, gridCount]) => {
    if (direction === 0) {
      for (let i = 0; i < gridCount; i++) {
        board[rowNum - 1].push(board[rowNum - 1].shift());
      }
    } else if (direction === 1) {
      for (let i = 0; i < gridCount; i++) {
        board[rowNum - 1].unshift(board[rowNum - 1].pop());
      }
    }
  });

  let answer = 0;
  let start = 0;
  let end = n - 1;
  const half = Math.floor(n / 2);
  for (let i = 0; i < n; i++) {
    answer += board[i].slice(start, end + 1).reduce((acc, val) => acc + val, 0);
    if (i < half) {
      start++;
      end--;
    } else {
      start--;
      end++;
    }
  }

  return answer;
};

console.log(
  solution(
    5,
    [
      [10, 13, 10, 12, 15],
      [12, 39, 30, 23, 11],
      [11, 25, 50, 53, 15],
      [19, 27, 29, 37, 27],
      [19, 13, 30, 13, 19],
    ],
    3,
    [
      [2, 0, 3],
      [5, 1, 2],
      [3, 1, 4],
    ]
  )
); // 362
