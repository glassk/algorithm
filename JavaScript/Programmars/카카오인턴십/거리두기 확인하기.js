// 참고: https://leego.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B1%B0%EB%A6%AC%EB%91%90%EA%B8%B0-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0-2021-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EC%9D%B8%ED%84%B4%EC%8B%AD-JavaScript
function solution(places) {
  const move = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];
  const SIZE = 5;

  const isValid = (x, y) => x >= 0 && y >= 0 && x < SIZE && y < SIZE;
  const isAvailableSeat = (x, y, checked) =>
    isValid(x, y) && checked[x][y] === 0;

  // BFS
  // queue에는 [x, y, n] 형태의 값 들어감(정점 x좌표, y좌표, 거리)
  // 시작점에서 상하좌우 정점 탐색
  const checkAround = (start, room, checked) => {
    let queue = [start];

    while (queue.length > 0) {
      const [x, y, n] = queue.shift();

      if (n !== 0 && room[x][y] === 'P') return false;

      move.forEach(([mx, my]) => {
        const _x = x + mx;
        const _y = y + my;

        if (isAvailableSeat(_x, _y, checked) && room[_x][_y] !== 'X') {
          if (n < 2) {
            checked[_x][_y] = 1;
            queue.push([_x, _y, n + 1]);
          }
        }
      });
    }

    return true;
  };

  // 모든 대기실의 자리를 순회하며 자리(P)를 찾는다
  // 자리를 만나면 해당 자리의 좌표를 시작점으로 BFS 탐색
  // checked는 정점 방문 여부 체크 배열
  const checkDistancing = (room) => {
    const checked = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));

    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        if (room[i][j] !== 'P') continue;

        checked[i][j] = 1;
        if (!checkAround([i, j, 0], room, checked)) return 0;
      }
    }

    // queue가 비워지고 while문 통과하면 거리두기 준수
    return 1;
  };

  return places.map(checkDistancing);
}

console.log(
  solution([
    ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
    ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
    ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
    ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
    ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
  ])
); // [ 1, 0, 1, 1, 1 ]
