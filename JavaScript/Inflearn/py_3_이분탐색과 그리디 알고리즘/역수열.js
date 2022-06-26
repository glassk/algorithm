// 1~n까지의 수를 한번씩만 사용해서 이뤄진 수열
// 역수열 = 1~n까지 각 수 앞에 놓인 큰 수들의 개수를 수열로 표현한 것
// 역수열이 주어졌을 때 원래 수열 출력하기
const solution = (n, arr) => {
  const answer = Array.from({ length: n }, () => 0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] === 0 && answer[j] === 0) {
        answer[j] = i + 1; // ✅
        break;
      } else if (answer[j] === 0) {
        arr[i]--;
      }
    }
  }

  return answer;
};

console.log(solution(8, [5, 3, 4, 0, 2, 1, 1, 0])); // [4, 8, 6, 2, 5, 1, 3, 7]
