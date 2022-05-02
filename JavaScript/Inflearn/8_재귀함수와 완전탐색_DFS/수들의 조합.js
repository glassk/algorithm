function solution(arr, k, m) {
  let answer = 0;
  const n = arr.length;

  function DFS(level, startIdx, sum) {
    if (level === k) {
      if (sum % m === 0) answer++;
    } else {
      for (let i = startIdx; i < n; i++) {
        DFS(level + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);

  return answer;
}

console.log(solution([2, 4, 5, 8, 12], 3, 6)); // 2

// 실제로 조합 연산 잘되는지 확인
function solution(arr, k, m) {
  let answer = 0;
  const n = arr.length;
  const temp = Array.from({ length: k });

  function DFS(level, startIdx, sum) {
    if (level === k) {
      if (sum % m === 0) answer++;
      console.log(sum, temp);
    } else {
      for (let i = startIdx; i < n; i++) {
        temp[level] = arr[i];
        DFS(level + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);

  return answer;
}

console.log(solution([2, 4, 5, 8, 12], 3, 6));
/**
11 [ 2, 4, 5 ]
14 [ 2, 4, 8 ]
18 [ 2, 4, 12 ]
15 [ 2, 5, 8 ]
19 [ 2, 5, 12 ]
22 [ 2, 8, 12 ]
17 [ 4, 5, 8 ]
21 [ 4, 5, 12 ]
24 [ 4, 8, 12 ]
25 [ 5, 8, 12 ]
2
 */
