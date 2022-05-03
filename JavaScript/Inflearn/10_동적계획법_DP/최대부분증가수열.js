function solution(arr) {
  let answer = 0;
  const len = arr.length;
  const dy = Array.from({ length: len }, () => 0);
  dy[0] = 1;

  for (let i = 1; i < len; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
  }

  return answer;
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4])); // 4
