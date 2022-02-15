function solution(arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const row = [];
    for (let j = 0; j < arr1[0].length; j++) {
      row.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(row);
  }
  return answer;
}

console.log(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
); // [[4,6],[7,9]]
console.log([[1], [2]], [[3], [4]]); // [[4],[6]]

// 다른 풀이: map()
function solution(arr1, arr2) {
  return arr1.map((e, i) => arr2[i].map((v, j) => arr1[i][j] + arr2[i][j]));
}
