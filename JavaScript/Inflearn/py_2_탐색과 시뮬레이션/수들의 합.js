const solution = (n, m, arr) => {
  let answer = 0;
  let i = 0;
  let j = 0;
  let tempSum = arr[0];
  while (i < n && j < n) {
    if (tempSum === m) {
      answer++;
      j++;
      tempSum = tempSum - arr[i++] + arr[j];
    } else if (tempSum < m) {
      j++;
      tempSum += arr[j];
    } else {
      tempSum -= arr[i++];
    }
  }

  return answer;
};

console.log(solution(8, 3, [1, 2, 1, 3, 1, 1, 1, 2])); // 5
