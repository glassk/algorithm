// distance 배열(dis) 이용
function solution(s, e) {
  const check = Array.from({ length: 10001 }, () => 0);
  const dis = Array.from({ length: 10001 }, () => 0);
  const queue = [];
  check[s] = 1;
  queue.push(s);
  dis[s] = 0;

  while (queue.length) {
    const x = queue.shift();
    for (let next of [x - 1, x + 1, x + 5]) {
      if (next === e) return dis[x] + 1;
      if (next > 0 && next <= 10000 && check[next] === 0) {
        check[next] = 1;
        queue.push(next);
        dis[next] = dis[x] + 1;
      }
    }
  }
}

console.log(solution(5, 14)); // 3
console.log(solution(8, 3)); // 5

// 레벨 탐색
function solution(s, e) {
  let answer = 0;
  let level = 0;
  const check = Array.from({ length: 10001 }, () => 0);
  const queue = [];
  check[s] = 1;
  queue.push(s);

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const x = queue.shift();
      for (let next of [x - 1, x + 1, x + 5]) {
        if (next === e) return level + 1;
        if (next > 0 && next <= 10000 && check[next] === 0) {
          check[next] = 1;
          queue.push(next);
        }
      }
    }
    level++;
  }

  return answer;
}
