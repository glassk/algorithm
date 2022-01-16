// 내 풀이
function solution(arr) {
  const result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) result.push(arr[i]);
  }

  return result;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); // [4,3]

// 다른 풀이: filter()
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
