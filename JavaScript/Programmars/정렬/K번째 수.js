function solution(array, commands) {
  const answer = [];

  let partArr;
  for (let [i, j, k] of commands) {
    partArr = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(partArr[k - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
); // [5, 6, 3]
