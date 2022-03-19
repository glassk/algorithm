function solution(arr) {
  const timeArr = [];
  for (let [s, e] of arr) {
    timeArr.push([s, 's']);
    timeArr.push([e, 'e']);
  }
  timeArr.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let answer = Number.MIN_SAFE_INTEGER;
  let count = 0;
  for (let time of timeArr) {
    time[1] === 's' ? count++ : count--;
    if (count > answer) answer = count;
  }

  return answer;
}

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
); // 2
