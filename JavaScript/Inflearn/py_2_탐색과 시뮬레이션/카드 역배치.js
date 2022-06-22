// 1~20장 오름차순
// 카드 위치 바꾸기: [a, b] a부터 b까지의 카드 역순으로 놓음
// 10개 구간에 대해 순서대로 순서 뒤집고 나서 마지막 카드 배치 출력
function solution(arr) {
  let cards = Array.from({ length: 20 }, (n, i) => i + 1);
  arr.forEach(([a, b]) => {
    cards = [
      ...cards.slice(0, a - 1),
      ...cards.slice(a - 1, b).reverse(),
      ...cards.slice(b),
    ];
  });

  return cards;
}

// ✅ 다른 풀이: 역순으로 놓을 부분만 swap
function solution(arr) {
  const cards = Array.from({ length: 21 }, (n, i) => i);
  arr.forEach(([a, b]) => {
    // 범위 유의
    for (let i = 0; i < Math.ceil((b - a + 1) / 2); i++) {
      [cards[a + i], cards[b - i]] = [cards[b - i], cards[a + i]];
    }
  });

  return cards.slice(1);
}

console.log(
  solution([
    [5, 10],
    [9, 13],
    [1, 2],
    [3, 4],
    [5, 6],
    [1, 2],
    [3, 4],
    [5, 6],
    [1, 20],
    [1, 20],
  ])
); // [1, 2, 3, 4, 10, 9, 8, 7, 13, 12, 11, 5, 6, 14, 15, 16, 17, 18, 19, 20]
