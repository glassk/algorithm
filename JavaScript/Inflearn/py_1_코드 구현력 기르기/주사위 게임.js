// 1~6 주사위 3개 던져서 상금 받기
// 1. 같은 눈 3개 나오면 10000+(같은 눈)*1000
// 2. 같은 눈 2개 나오면 1000+(같은 눈)*100
// 3. 모두 다른 눈 나오면 (그 중 가장 큰 눈)*100
// n명 주사위 게임 참여 시 가장 많은 상금 받는 사람의 상금 출력
const solution = (n, arr) => {
  let answer = 0;
  let prize, sameNum;
  arr.forEach((dices) => {
    dices.sort(); // ✅ 오름차순 정렬 후 비교
    const [a, b, c] = dices;
    if (a === b && b === c) {
      prize = 10000 + a * 1000;
    } else if (a === b || a === c) {
      prize = 1000 + a * 100;
    } else if (b === c) {
      prize = 1000 + b * 100;
    } else {
      prize = c * 100;
    }
    answer = Math.max(answer, prize);
  });

  return answer;
};

console.log(
  solution(3, [
    [3, 3, 6],
    [2, 2, 2],
    [6, 2, 5],
  ])
); // 12000
