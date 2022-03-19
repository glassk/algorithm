function countDist(stable, dist) {
  let count = 1,
    ep = stable[0];

  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      count++;
      ep = stable[i];
    }
  }

  return count;
}

function solution(c, stable) {
  stable.sort((a, b) => a - b);

  let left = 1,
    right = stable[stable.length - 1];

  let mid, answer;
  while (left <= right) {
    mid = parseInt((left + right) / 2);
    if (countDist(stable, mid) >= c) {
      answer = mid;
      left = mid + 1;
    } else right = mid - 1;
  }

  return answer;
}

console.log(solution(3, [1, 2, 8, 4, 9])); // 3
