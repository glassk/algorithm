function solution(arr) {
  const arrSum = arr.reduce((acc, v) => acc + v, 0);
  let answer = 'NO';
  let flag = false;

  function DFS(level, sum) {
    if (flag) return;

    if (level === arr.length) {
      // (arrSum - sum) === sum
      if (sum * 2 === arrSum) {
        answer = 'YES';
        flag = true;
      }
    } else {
      DFS(level + 1, sum + arr[level]);
      DFS(level + 1, sum);
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10])); // YES
