function solution(n) {
  let answer = '';

  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += n % 2; // String()으로 변환해도 됨
    }
  }

  DFS(n);

  return answer;
}

console.log(solution(11)); // 1011
