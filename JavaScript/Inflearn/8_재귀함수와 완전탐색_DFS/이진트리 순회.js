function solution(v) {
  function DFS(v) {
    if (v > 7) return;
    else {
      // 전위 순회: 1 2 4 5 3 6 7
      console.log(v);
      DFS(v * 2);
      DFS(v * 2 + 1);

      // 중위 순회: 4 2 5 1 6 3 7
      DFS(v * 2);
      console.log(v);
      DFS(v * 2 + 1);

      // 후위 순회: 4 5 2 6 7 3 1
      DFS(v * 2);
      DFS(v * 2 + 1);
      console.log(v);
    }
  }

  DFS(v);
}

solution(1);
