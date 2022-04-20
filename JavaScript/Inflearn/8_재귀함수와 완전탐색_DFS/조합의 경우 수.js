function solution(n, r) {
  let answer;
  const memo = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // 2차원 배열(5행 3열)

  function DFS(n, r) {
    if (memo[n][r] > 0) return memo[n][r];

    if (r === 0 || n === r) return 1;
    else return (memo[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }

  answer = DFS(n, r);

  return answer;
}

console.log(solution(5, 3)); // 10
console.log(solution(33, 19)); // 818809200
