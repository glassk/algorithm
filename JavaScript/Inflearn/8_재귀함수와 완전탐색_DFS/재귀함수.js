function solution(n) {
  function DFS(level) {
    if (level == 0) return;
    else {
      DFS(level - 1);
      console.log(level);
    }
  }

  DFS(n);
}

solution(3); // 1 2 3
