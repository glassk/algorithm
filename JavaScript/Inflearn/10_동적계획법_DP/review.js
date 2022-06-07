// 1. 계단오르기
const solution = (n) => {
  const dynamic = Array.from({ length: n + 1 }, () => 0);
  dynamic[1] = 1;
  dynamic[2] = 2;

  for (let i = 3; i <= n; i++) {
    dynamic[i] = dynamic[i - 2] + dynamic[i - 1];
  }

  return dynamic[n];
};

console.log(solution(7)); // 21

// 2. 돌다리 건너기
const solution = (n) => {
  const dynamic = Array.from({ length: n + 2 }, () => 0);
  dynamic[1] = 1;
  dynamic[2] = 2;

  for (let i = 3; i <= n + 1; i++) {
    dynamic[i] = dynamic[i - 2] + dynamic[i - 1];
  }

  return dynamic[n + 1];
};

console.log(solution(7)); // 34

// 3. 최대 부분 증가수열 (✅ 다시 풀어보기)
const solution = (n, arr) => {
  const dynamic = Array.from({ length: n }, () => 0);
  dynamic[0] = 1;

  let max;
  let answer = 0;
  for (let i = 1; i < n; i++) {
    max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j] && dynamic[j] > max) {
        max = dynamic[j];
      }
    }
    dynamic[i] = max + 1;
    answer = Math.max(answer, dynamic[i]);
  }

  return answer;
};

console.log(solution(8, [5, 3, 7, 8, 6, 2, 9, 4])); // 4

// 4. 동전교환(냅색 알고리즘) (✅ 다시 풀어보기)
const solution = (n, arr, m) => {
  const dynamic = Array.from({ length: m + 1 }, () => 1000);
  dynamic[0] = 0;

  for (let i = 0; i < n; i++) {
    for (let j = arr[i]; j <= m; j++) {
      dynamic[j] = Math.min(dynamic[j], dynamic[j - arr[i]] + 1); // ✅
    }
  }

  return dynamic[m];
};

console.log(solution(3, [1, 2, 5], 15)); // 3

// 5. 최대점수 구하기(냅색 알고리즘)
const solution = (n, m, arr) => {
  const dynamic = Array.from({ length: m + 1 }, () => 0); // 시간별 최대점수 구하기

  for (let [score, time] of arr) {
    for (let i = time; i <= m; i++) {
      dynamic[i] = Math.max(dynamic[i], dynamic[i - time] + score);
    }
  }

  return dynamic[m];
};

console.log(
  solution(5, 20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
); // 41
