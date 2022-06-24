// 1~n 자연수로 이뤄진 길이 n 수열
// 수열 왼쪽/오른쪽 맨 끝 숫자 하나 가져와서(제거)
// 가장 긴 증가수열 만들기
const solution = (n, arr) => {
  const LEFT = 'L';
  const RIGHT = 'R';

  let left = 0;
  let right = n - 1;
  let last = 0;
  let result = '';
  let temp = [];
  while (left <= right) {
    // ✅ temp 배열에 가능한 경우 모두 넣고 오름차순 정렬
    if (arr[left] > last) {
      temp.push([arr[left], LEFT]);
    }
    if (arr[right] > last) {
      temp.push([arr[right], RIGHT]);
    }
    temp.sort((a, b) => a[0] - b[0]);

    if (temp.length === 0) break;
    result += temp[0][1];
    last = temp[0][0];
    if (temp[0][1] === LEFT) left++;
    else if (temp[0][1] === RIGHT) right--;
    temp = [];
  }

  return [result.length, result];
};

console.log(solution(5, [2, 4, 5, 1, 3])); // [ 4, 'LRLL' ]
console.log(solution(10, [3, 2, 10, 1, 5, 4, 7, 8, 9, 6])); // [ 3, 'LRR' ]
