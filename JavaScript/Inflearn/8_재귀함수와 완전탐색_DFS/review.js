// 1. 재귀함수
const solution = (n) => {
  let answer = '';

  const dfs = (level) => {
    if (level === 0) return;
    else {
      dfs(level - 1);
      answer += level + ' ';
    }
  };

  dfs(n);

  return answer;
};

console.log(solution(3)); // 1 2 3

// 2. 재귀함수를 이용한 이진수 출력
const solution = (n) => {
  let answer = '';

  const dfs = (n) => {
    if (n === 0) return;
    else {
      dfs(Math.floor(n / 2));
      answer += n % 2;
    }
  };

  dfs(n);

  return answer;
};

console.log(solution(11)); // 1011;

// 3. 이진트리 순회(깊이우선탐색)
const solution = (n) => {
  let answer = '';
  // 전위순회
  const dfs = (v) => {
    if (v > n) return;
    else {
      answer += v + ' ';
      dfs(v * 2);
      dfs(v * 2 + 1);
    }
  };

  // 중위순회
  const dfs = (v) => {
    if (v > n) return;
    else {
      dfs(v * 2);
      answer += v + ' ';
      dfs(v * 2 + 1);
    }
  };

  // 후위 순회
  const dfs = (v) => {
    if (v > n) return;
    else {
      dfs(v * 2);
      dfs(v * 2 + 1);
      answer += v + ' ';
    }
  };

  dfs(1);

  return answer;
};

console.log(solution(7));

// 4. 부분집합 구하기(DFS) (✅ 다시 풀어보기)
const solution = (n) => {
  let answer = '';
  const check = Array.from({ length: n + 1 }, () => 0);

  let temp;
  const dfs = (v) => {
    if (v === n + 1) {
      temp = '';
      for (let i = 1; i <= n; i++) {
        if (check[i] === 1) {
          temp += i + ' ';
        }
      }
      if (temp.length > 0) answer += temp + '\n';
    } else {
      check[v] = 1;
      dfs(v + 1);
      check[v] = 0;
      dfs(v + 1);
    }
  };

  dfs(1);

  return answer;
};

console.log(solution(3));

// 5. 합이 같은 부분집합(DFS)
const solution = (n, arr) => {
  let flag = false;
  const halfSum = Math.floor(arr.reduce((acc, val) => acc + val, 0) / 2);

  const dfs = (level, sum) => {
    if (flag) return;

    if (level === n + 1) {
      if (sum === halfSum) flag = true;
    } else {
      dfs(level + 1, sum + arr[level]);
      dfs(level + 1, sum);
    }
  };

  dfs(0, 0);
  return flag ? 'YES' : 'NO';
};

console.log(solution(6, [1, 3, 5, 6, 7, 10])); // YES

// 6. 바둑이 승차(DFS)
const solution = (c, n, arr) => {
  let answer = Number.MIN_SAFE_INTEGER;

  const dfs = (level, sum) => {
    if (sum > c) return;

    if (level === n) {
      if (sum > answer) answer = sum;
    } else {
      dfs(level + 1, sum + arr[level]);
      dfs(level + 1, sum);
    }
  };

  dfs(0, 0);

  return answer;
};

console.log(solution(259, 5, [81, 58, 42, 33, 61])); // 242

// 7. 최대점수 구하기(DFS)
const solution = (n, m, arr) => {
  let answer = Number.MIN_SAFE_INTEGER;

  const dfs = (level, score, time) => {
    if (time > m) return;

    if (level === n) {
      if (score > answer) answer = score;
    } else {
      dfs(level + 1, score + arr[level][0], time + arr[level][1]);
      dfs(level + 1, score, time);
    }
  };

  dfs(0, 0, 0);

  return answer;
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

// 8. 중복순열 구하기 (✅ 다시 풀어보기)
const solution = (n, m) => {
  let answer = '';
  const temp = Array.from({ length: m }, () => 0);
  let count = 0;

  const dfs = (level) => {
    if (level === m) {
      answer += temp.join(' ') + '\n';
      count++;
    } else {
      for (let i = 1; i <= n; i++) {
        temp[level] = i;
        dfs(level + 1);
      }
    }
  };

  dfs(0);
  answer += count;

  return answer;
};

console.log(solution(3, 2));

// 9. 동전교환 (✅ 다시 풀어보기)
const solution = (n, arr, m) => {
  let answer = Number.MAX_SAFE_INTEGER;

  const dfs = (level, sum) => {
    // ✅ Cut edge tech
    if (level >= answer || sum > m) return;

    if (sum === m) {
      answer = Math.min(answer, level);
    } else {
      for (let i = 0; i < n; i++) {
        dfs(level + 1, sum + arr[i]);
      }
    }
  };

  dfs(0, 0);

  return answer;
};

console.log(solution(3, [1, 2, 5], 15)); // 3

// 10. 순열 구하기
const solution = (n, m, arr) => {
  let answer = '';
  let count = 0;
  const temp = Array.from({ length: m }, () => 0);
  const check = Array.from({ length: n }, () => 0);

  const dfs = (level) => {
    if (level === m) {
      answer += temp.join(' ') + '\n';
      count++;
    } else {
      for (let i = 0; i < n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp[level] = arr[i];
          dfs(level + 1);
          check[i] = 0;
        }
      }
    }
  };

  dfs(0);
  answer += count;

  return answer;
};

console.log(solution(3, 2, [3, 6, 9]));

// 11. 팩토리얼
const solution = (n) => {
  const dfs = (n) => {
    if (n === 1) return 1;
    else return n * dfs(n - 1);
  };

  return dfs(n);
};

console.log(solution(5)); // 120

// 12. 조합의 경우수(✅ 메모이제이션, 다시 풀어보기)
const solution = (n, r) => {
  const memo = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  const dfs = (n, r) => {
    if (memo[n][r] > 0) return memo[n][r];

    if (r === 0 || n === r) return 1;
    else return (memo[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r));
  };

  return dfs(n, r);
};

console.log(solution(5, 3)); // 10
console.log(solution(33, 19)); // 818809200

// 13. 수열 추측하기(순열, 이항계수, 파스칼의 삼각형) 🔥🔥
const solution = (n, f) => {
  const memo = Array.from(Array(11), () => Array(11).fill(0));
  const combination = (n, r) => {
    if (memo[n][r] > 0) return memo[n][r];

    if (r === 0 || n === r) return 1;
    else
      return (memo[n][r] = combination(n - 1, r - 1) + combination(n - 1, r));
  };

  const check = Array.from({ length: n + 1 }, () => 0);
  const p = Array.from({ length: n }, () => 0);
  let answer;
  let flag = false;
  const dfs = (level, sum) => {
    if (flag) return;

    if (level === n && sum === f) {
      answer = p.slice();
      flag = true;
    } else {
      for (let i = 1; i <= n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          p[level] = i;
          dfs(level + 1, sum + c[level] * p[level]);
          check[i] = 0;
        }
      }
    }
  };

  const c = Array.from({ length: n }, () => 0);
  for (let i = 0; i < n; i++) {
    c[i] = combination(n - 1, i);
  }

  dfs(0, 0);

  return answer;
};

console.log(solution(4, 16)); // [3, 1, 2, 4]

// 14. 조합 구하기 (✅ 다시 풀어보기)
const solution = (n, m) => {
  let answer = '';
  let count = 0;
  const temp = Array.from({ length: m }, () => 0);

  const dfs = (level, start) => {
    if (level === m) {
      answer += temp.join(' ') + '\n';
      count++;
    } else {
      for (let i = start; i <= n; i++) {
        temp[level] = i;
        dfs(level + 1, i + 1);
      }
    }
  };

  dfs(0, 1);
  answer += count;

  return answer;
};

console.log(solution(4, 2));

// 15. 수들의 조합
const solution = (n, k, arr, m) => {
  let answer = 0;
  const temp = Array.from({ length: k }, () => 0);

  const dfs = (level, start, sum) => {
    if (level === k) {
      if (sum % m === 0) answer++;
    } else {
      for (let i = start; i < n; i++) {
        temp[level] = arr[i];
        dfs(level + 1, i + 1, sum + arr[i]);
      }
    }
  };

  dfs(0, 0, 0);

  return answer;
};

console.log(solution(5, 3, [2, 4, 5, 8, 12], 6)); // 2
