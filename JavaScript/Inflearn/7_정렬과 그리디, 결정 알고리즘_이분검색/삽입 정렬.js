function solution(n, arr) {
  let answer = arr;

  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = temp;
  }

  return answer;
}

console.log(solution(8, [1, 2, 3, -3, -2, 5, 6, -6]));
