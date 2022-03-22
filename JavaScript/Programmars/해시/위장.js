function solution(clothes) {
  const clothesMap = new Map();
  for (let [, type] of clothes) {
    clothesMap.set(type, (clothesMap.get(type) || 0) + 1);
  }

  let answer = 1;
  for (let val of clothesMap.values()) {
    answer *= val + 1; // 종류 수 + 착용 X
  }

  return answer - 1; // 아무것도 착용하지 않는 경우 제외
}

console.log(
  solution([
    ['yellowhat', 'headgear'],
    ['bluesunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
); // 5
console.log(
  solution([
    ['crowmask', 'face'],
    ['bluesunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ])
); // 3
