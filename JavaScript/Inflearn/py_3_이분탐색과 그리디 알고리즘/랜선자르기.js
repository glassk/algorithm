// 길이 제각각인 k개 랜선
// 모두 n개의 같은 길이의 랜선으로 만들고자 함
// 이미 자른 랜선은 붙일 수 없음
// n개보다 많이 만드는 것도 포함
// 만들 수 있는 최대 랜선의 길이 구하기
const solution = (k, n, arr) => {
  const countLan = (length) => {
    let count = 0;
    arr.forEach((lan) => {
      count += Math.floor(lan / length);
    });
    return count;
  };

  let left = 1;
  let right = Math.min(...arr);
  let answer, mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (countLan(mid) >= n) {
      answer = mid; // ✅
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
};

console.log(solution(4, 11, [802, 743, 457, 539])); // 200
