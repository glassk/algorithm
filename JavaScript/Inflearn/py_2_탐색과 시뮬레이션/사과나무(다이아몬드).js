// n*n 격자판, n은 항상 홀수
// 격자판 사과 수학 시 다이아몬드 부분만 수확
const solution = (n, arr) => {
  let answer = 0;
  let halfN = Math.floor(n / 2);
  let start = halfN;
  let end = halfN;
  for (let i = 0; i < n; i++) {
    answer += arr[i].slice(start, end + 1).reduce((acc, val) => acc + val, 0);

    if (i < halfN) {
      start--;
      end++;
    } else {
      start++;
      end--;
    }
  }

  return answer;
};

console.log(
  solution(5, [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
); // 379
