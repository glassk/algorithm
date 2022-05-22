function solution(lottos, win_nums) {
  const countSameNums = (arrA, arrB) => {
    let count = 0;
    let pointerA = 0,
      pointerB = 0;
    while (pointerA < LOTTO_NUM && pointerB < LOTTO_NUM) {
      if (arrA[pointerA] === arrB[pointerB]) {
        count++;
        pointerA++;
        pointerB++;
      } else if (arrA[pointerA] < arrB[pointerB]) pointerA++;
      else pointerB++;
    }
    return count;
  };

  const LOTTO_NUM = 6;
  const ranks = [6, 6, 5, 4, 3, 2, 1];

  lottos.sort((a, b) => a - b);
  win_nums.sort((a, b) => a - b);

  const sameNumsCount = countSameNums(lottos, win_nums);
  const zeroCount = lottos.filter((val) => val === 0).length;
  const lowest = ranks[sameNumsCount];
  const highest = ranks[sameNumsCount + zeroCount];

  return [highest, lowest];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]
