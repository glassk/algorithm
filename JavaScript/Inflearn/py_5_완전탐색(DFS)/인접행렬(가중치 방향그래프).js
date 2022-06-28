// 그래프 정보를 인접행렬로 표현하기
// 정점 수 n, 간선 수 m, 연결정보와 거리비용 arr
const solution = (n, m, arr) => {
  const graph = Array.from(Array(n), () => Array(n).fill(0));
  arr.forEach(([start, end, cost]) => {
    graph[start - 1][end - 1] = cost;
  });

  return graph;
};

console.log(
  solution(6, 9, [
    [1, 2, 7],
    [1, 3, 4],
    [2, 1, 2],
    [2, 3, 5],
    [2, 5, 5],
    [3, 4, 5],
    [4, 2, 2],
    [4, 5, 5],
    [6, 4, 5],
  ])
);
/**
 * [
  [ 0, 7, 4, 0, 0, 0 ],
  [ 2, 0, 5, 0, 5, 0 ],
  [ 0, 0, 0, 5, 0, 0 ],
  [ 0, 2, 0, 0, 5, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 5, 0, 0 ]
]
 */
