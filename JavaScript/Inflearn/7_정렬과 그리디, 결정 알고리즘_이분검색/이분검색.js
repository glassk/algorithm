function solution(target, arr) {
  arr.sort((a, b) => a - b);

  let left = 0,
    right = arr.length - 1,
    mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid + 1;
    else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81])); // 3
