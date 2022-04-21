function solution(n, f) {
  let answer,
    flag = 0;
  const memo = Array.from(Array(11), () => Array(11).fill(0));
  const check = Array.from({ length: n + 1 }, () => 0);
  const p = Array.from({ length: n }, () => 0);
  const b = Array.from({ length: n }, () => 0);

  function combination(n, r) {
    if (memo[n][r] > 0) return memo[n][r];

    if (n === r || r === 0) return 1;
    else return combination(n - 1, r - 1) + combination(n - 1, r);
  }

  function DFS(level, sum) {
    if (flag) return;

    if (level === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          p[level] = i;
          DFS(level + 1, sum + b[level] * p[level]);
          check[i] = 0;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    b[i] = combination(n - 1, i);
  }

  DFS(0, 0);

  return answer;
}

console.log(solution(4, 16)); // [ 3, 1, 2, 4 ]

// 다른 방식
function solution(n, f) {
  let answer,
    flag = 0;
  const memo = Array.from(Array(11), () => Array(11).fill(0));
  const check = Array.from({ length: n + 1 }, () => 0);
  const p = []; // 빈 배열에 값 push, pop
  const b = Array.from({ length: n }, () => 0);

  function combination(n, r) {
    if (memo[n][r] > 0) return memo[n][r];

    if (n === r || r === 0) return 1;
    else return combination(n - 1, r - 1) + combination(n - 1, r);
  }

  function DFS(level, sum) {
    if (flag) return;

    if (level === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          p.push(i);
          DFS(level + 1, sum + b[level] * p[level]);
          check[i] = 0;
          p.pop();
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    b[i] = combination(n - 1, i);
  }

  DFS(0, 0);

  return answer;
}
