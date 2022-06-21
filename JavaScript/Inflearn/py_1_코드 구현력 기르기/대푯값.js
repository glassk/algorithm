// 그 중 가장 평균에 가까운 학생 몇 번째인지 출력
// 여러 명이면 점수가 높은 학생 번호로
// 높은 점수가 여러 명이면 학생 번호가 빠른 학생 번호로
const solution = (n, arr) => {
  const average = Math.ceil(arr.reduce((acc, val) => acc + val, 0) / n);
  let minDiff = Number.MAX_SAFE_INTEGER;
  let maxScore = 0;
  let minIndex = n;
  for (let i = 0; i < n; i++) {
    const diff = Math.abs(arr[i] - average);
    if (diff < minDiff) {
      minDiff = diff;
      maxScore = arr[i];
      minIndex = i;
    } else if (diff === minDiff) {
      if (arr[i] > maxScore) {
        minIndex = i;
        maxScore = arr[i];
      }
    }
  }

  return [average, minIndex + 1];
};

console.log(solution(10, [45, 73, 66, 87, 92, 67, 75, 79, 75, 80])); // [74, 7]
