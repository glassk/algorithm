function solution(numbers, target) {
  let answer = 0;

  function DFS(level, total) {
    if (level < numbers.length) {
      DFS(level + 1, total + numbers[level]);
      DFS(level + 1, total - numbers[level]);
    } else {
      if (total === target) answer++;
    }
  }

  DFS(0, 0);

  return answer;
}

// 250418
function solution(numbers, target) {
  const numbersLen = numbers.length;
  let answer = 0;

  function dfs(index, sum) {
    if (index === numbersLen) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  dfs(0, 0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
console.log(solution([4, 1, 2, 1], 4)); // 2
