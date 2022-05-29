// 1. ✅ 선택 정렬
const solution = (n, arr) => {
  const answer = arr; // 얕은 복사
  for (let i = 0; i < n; i++) {
    let index = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[index]) index = j;
    }
    [arr[i], arr[index]] = [arr[index], arr[i]]; // ✅ 값 교환(swap)
  }

  return answer;
};

console.log(solution(6, [13, 5, 11, 7, 23, 15])); // [5, 7, 11, 13, 15, 23]

// 2. ✅ 버블 정렬
const solution = (n, arr) => {
  const answer = arr;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
};

console.log(solution(6, [13, 5, 11, 7, 23, 15])); // [5, 7, 11, 13, 15, 23]

// 3. Special Sort
const solution = (n, arr) => {
  const answer = arr;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
};

console.log(solution(8, [1, 2, 3, -3, -2, 5, 6, -6])); // [-3, -2, -6, 1, 2, 3, 5, 6]s

// 4. ✅ 삽입 정렬
const solution = (n, arr) => {
  const answer = arr;
  let current, j;
  for (let i = 0; i < n; i++) {
    current = arr[i];
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > current) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = current;
  }

  return answer;
};

console.log(solution(6, [11, 7, 5, 6, 10, 9])); // [5, 6, 7, 9, 10,s 11]

// 5. Least Recently Used(LRU) (✅ 삽입정렬 응용)
const solution = (s, n, arr) => {
  let cache = Array.from({ length: s }, () => 0);
  for (let work of arr) {
    const position = cache.indexOf(work);
    if (position >= 0) {
      for (let i = position; i >= 1; i--) {
        cache[i] = cache[i - 1];
      }
    } else {
      for (let i = s - 1; i >= 1; i--) {
        cache[i] = cache[i - 1];
      }
    }
    cache[0] = work;
  }

  return cache;
};

console.log(solution(5, 9, [1, 2, 3, 2, 6, 2, 3, 5, 7])); // [7, 5, 3, 2, 6]

// 6. 장난꾸러기 현수
const solution = (n, arr) => {
  const answer = [];

  // 풀이1: 현수와 짝꿍 차례로 찾기
  let position;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      position = i + 1;
      answer.push(position);
      break;
    }
  }

  for (let i = position + 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      answer.push(i + 1);
      break;
    }
  }

  //✅ 풀이2: 오름차순 정렬 후 원본 배열과 일치하지 않은 원소를 답으로
  const sortedArr = arr.slice().sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) answer.push(i + 1);
  }

  return answer;
};

console.log(solution(9, [120, 125, 152, 130, 135, 135, 143, 127, 160])); // [3, 8]
console.log(solution(6, [120, 130, 150, 150, 130, 150])); // [3, 5]

// 7. 좌표 정렬
const solution = (n, arr) => {
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  return arr;
};

console.log(
  solution(5, [
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ])
);

// 8. 회의실 배정
const solution = (n, arr) => {
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let answer = 0;
  let end = 0;
  for (let i = 0; i < n; i++) {
    if (end <= arr[i][0]) {
      end = arr[i][1];
      answer++;
    }
  }

  return answer;
};

console.log(
  solution(5, [
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
); // 3
console.log(
  solution(3, [
    [3, 3],
    [1, 3],
    [2, 3],
  ])
); // 2

// 9. 결혼식 (✅ 다시 풀어보기!)
const solution = (n, arr) => {
  const timeInfos = [];
  console.log(arr);
  for (let [s, e] of arr) {
    timeInfos.push([s, 's']);
    timeInfos.push([e, 'e']);
  }

  timeInfos.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let answer = 0;
  let count = 0;
  for (let [, type] of timeInfos) {
    if (type === 's') count++;
    else if (type === 'e') count--;
    answer = Math.max(answer, count);
  }

  return answer;
};

console.log(
  solution(5, [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
); // 2

// 10. 이분검색
const solution = (n, m, arr) => {
  arr.sort((a, b) => a - b);
  let start = 0;
  let end = n - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === m) return mid + 1;
    else if (arr[mid] > m) end = mid - 1;
    else if (arr[mid] < m) start = mid + 1;
  }
};

console.log(solution(8, 32, [23, 87, 65, 12, 57, 32, 99, 81])); // 3

// 11. 뮤직비디오 (결정 알고리즘) (✅ 다시 풀어보기!)
const solution = (n, m, arr) => {
  // ✅ 주어진 용량에 맞춰서 개수 세기
  const countDvd = (capactiy) => {
    let count = 1;
    let acc = 0;
    for (let song of arr) {
      if (acc + song > capactiy) {
        count++;
        acc = song;
      } else {
        acc += song;
      }
    }

    return count;
  };

  // ✅초기 범위 설정
  let start = Math.max(...arr);
  let end = arr.reduce((val, acc) => val + acc, 0);

  let mid;
  let answer = 0;
  while (start <= end) {
    mid = Math.floor((start + end) / 2); // 한 dvd의 크기
    if (countDvd(mid) <= m) {
      answer = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return answer;
};

console.log(solution(9, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])); // 17

// 12. 마구간 정하기 (결정 알고리즘) (✅ 다시 풀어보기!)
const solution = (n, c, arr) => {
  // ✅ 주어진 거리만큼 떨어져 있는 말 수 세기
  const countHorse = (dist) => {
    let count = 1;
    let lastHorse = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - lastHorse >= dist) {
        count++;
        lastHorse = arr[i];
      }
    }

    return count;
  };

  arr.sort((a, b) => a - b);

  let start = 1;
  let end = arr[n - 1]; // ✅ 마지막 원소(가장 큰 원소)로 초기화
  let mid, answer;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (countHorse(mid) >= c) {
      answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return answer;
};

console.log(solution(5, 3, [1, 2, 8, 4, 9])); // 3
