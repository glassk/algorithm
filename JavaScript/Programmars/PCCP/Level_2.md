## 퍼즐 게임 챌린지

[문제](https://school.programmers.co.kr/learn/courses/30/lessons/340212?language=javascript#)

이분 탐색 문제.

처음에 high을 diffs 배열의 최댓값으로 가정했는데, 실제 minLevel 값이 diffs 배열의 최댓값보다 커질 수 있다는 점을 고려하지 못해서 일부 케이스에서 런타임 에러가 발생했다. 문제 조건 중 diffs[i]의 최댓값을 100,000이므로 high의 초깃값도 동일하게 설정하면 된다.

```javascript
function solution(diffs, times, limit) {
  const n = diffs.length;
  let minLevel = 0;
  let low = 1;
  let high = 100000;
  let mid = 0;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (canSolveInTime(mid, diffs, times, limit)) {
      minLevel = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return minLevel;
}

function canSolveInTime(level, diffs, times, limit) {
  const n = diffs.length;
  let currentTime = times[0];

  for (let i = 1; i < n; i++) {
    if (diffs[i] <= level) {
      currentTime += times[i];
    } else {
      currentTime += (times[i] + times[i - 1]) * (diffs[i] - level) + times[i];
    }

    if (currentTime > limit) {
      return false;
    }
  }

  return true;
}
```
