// 내 풀이 1: filter() 활용
function solution(arr) {
  if (arr.length === 1) return [-1];

  const minNum = Math.min(...arr);

  return arr.filter((val, idx) => val !== minNum);
}

// 내 풀이 2: indexOf()와 splice() 활용
function solution(arr) {
  if (arr.length === 1) return [-1];

  const minNum = Math.min(...arr);
  const newArr = [...arr];
  const minNumIdx = newArr.indexOf(minNum);
  newArr.splice(minNumIdx, 1);

  return newArr;
}

console.log(solution([4, 3, 2, 1])); // [4,3,2]
console.log(solution([10])); // [-1]
