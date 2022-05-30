// 내 풀이
function solution(arr, divisor) {
  let answer = arr.filter((val, idx) => {
    if (val % divisor === 0) return val;
  });

  if (answer.length === 0) answer = [-1];
  else answer.sort((x, y) => x - y);

  return answer;
}

console.log(solution([5, 9, 7, 10], 5)); // [5, 10]
console.log(solution([2, 36, 1, 3], 1)); // [1, 2, 3, 36]
console.log(solution([3, 2, 6], 10)); // -1

// 다른 풀이: push()
function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  answer.sort((a, b) => a - b);

  if (answer.length === 0) {
    answer.push(-1);
  }
  return answer;
}
