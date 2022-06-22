// n개 수로 된 수열에서 i번째 수부터 j번째 수까지의 합이
// m이 되는 경우의 수 구하기
const solution = (n, m, arr) => {
  let answer = 0;
  let i = 0;
  let j = 1;
  let sum = arr[i];
  while (i <= j) {
    if (sum + arr[j] === m) {
    }
  }

  return answer;
};

console.log(solution(8, 3, [1, 2, 1, 3, 1, 1, 1, 2]));
