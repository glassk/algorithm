function solution(n) {
  const answer = [];
  const check = Array.from({ legnth: n + 1 }, () => 0);

  function DFS(v) {
    if (v === n + 1) {
      let temp = '';
      for (let i = 1; i <= n; i++) {
        if (check[i] === 1) temp += i + ' ';
      }
      if (temp.length > 0) answer.push(temp.trim());
    } else {
      check[v] = 1;
      DFS(v + 1);
      check[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);

  return answer;
}

console.log(solution(3)); // [ '1 2 3', '1 2', '1 3', '1', '2 3', '2', '3' ]
