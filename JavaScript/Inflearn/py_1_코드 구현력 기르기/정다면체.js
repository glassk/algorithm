// 정 n면체와 정 m면체 두 주사위를 던져서 나올 수 있는 눈의 합 중
// 가장 확률이 높은 숫자 출력 (정답 여러 개이면 오름차순 출력)
const solution = (n, m) => {
  const sumArr = Array.from({ length: n + m + 1 }, () => 0); // ✅ 배열 이용
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      sumArr[i + j]++;
    }
  }

  const maxSum = Math.max(...sumArr);
  const answer = [];
  sumArr.forEach((sum, index) => {
    if (sum === maxSum) answer.push(index);
  });

  return answer;
};

console.log(solution(4, 6)); // [5, 6, 7]
