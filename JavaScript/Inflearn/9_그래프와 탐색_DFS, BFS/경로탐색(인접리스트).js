// function solution(n, arr) {
//   let answer = 0;
//   const graph = Array.from(Array(n + 1), () => Array());
//   const check = Array.from({ length: n + 1 }, () => 0);

//   for (let [a, b] of arr) {
//     graph[a].push(b);
//   }

//   function DFS(v) {
//     if (v === n) answer++;
//     else {
//       const len = graph[v].length;
//       for (let i = 0; i < len; i++) {
//         if (check[graph[v][i]] === 0) {
//           check[graph[v][i]] = 1;
//           DFS(graph[v][i]);
//           check[graph[v][i]] = 0;
//         }
//       }
//     }
//   }

//   check[1] = 1;
//   DFS(1);

//   return answer;
// }

// console.log(
//   solution(5, [
//     [1, 2],
//     [1, 3],
//     [1, 4],
//     [2, 1],
//     [2, 3],
//     [2, 5],
//     [3, 4],
//     [4, 2],
//     [4, 5],
//   ])
// ); // 6

// 경로까지 구하기(path)
function solution(n, arr) {
  let answer = 0;
  const graph = Array.from(Array(n + 1), () => Array());
  const check = Array.from({ length: n + 1 }, () => 0);
  const path = [];

  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      const len = graph[v].length;
      for (let i = 0; i < len; i++) {
        if (check[graph[v][i]] === 0) {
          check[graph[v][i]] = 1;
          path.push(graph[v][i]);
          DFS(graph[v][i]);
          check[graph[v][i]] = 0;
          path.pop();
        }
      }
    }
  }

  check[1] = 1;
  DFS(1);

  return answer;
}

console.log(
  solution(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
/**
[ 2, 3, 4, 5 ]
[ 2, 5 ]
[ 3, 4, 2, 5 ]
[ 3, 4, 5 ]
[ 4, 2, 5 ]
[ 4, 5 ]
6
 */
