// n의 약수 중 k번째로 작은 수 출력
// n의 약수 개수가 k보다 작아서 존재하지 않으면 -1 출력
const solution = (n, k) => {
  let order = 1;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && order === k) return order;
    else order++;
  }
  return -1;
};

console.log(solution(6, 3)); // 3
