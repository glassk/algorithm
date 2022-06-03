function solution(N, stages) {
  const trys = Array.from({ length: N + 2 }, () => 0);
  for (let stage of stages) {
    for (let i = 1; i <= stage; i++) {
      trys[i]++;
    }
  }

  const clears = trys.slice();
  for (let stage of stages) {
    clears[stage]--;
  }

  const rates = [];
  for (let i = 1; i <= N; i++) {
    rates.push([(trys[i] - clears[i]) / trys[i], i]);
  }
  rates.sort((a, b) => b[0] - a[0]);

  const answer = [];
  for (let [, idx] of rates) {
    answer.push(idx);
  }

  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4,1,2,3]
