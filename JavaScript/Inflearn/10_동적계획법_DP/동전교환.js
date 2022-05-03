function solution(arr, m) {
  let answer = 0;
  const dy = Array.from({ length: m + 1 }, () => 1000);
  dy[0] = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - arr[i]] + 1);
    }
  }

  answer = dy[m];

  return answer;
}

console.log(solution([1, 2, 5], 15)); // 3
