// Level 1 폰켓몬 https://school.programmers.co.kr/learn/courses/30/lessons/1845
// 1. 중복을 제외한 폰켓몬 종류 수
// 2. 선택하는 N/2(최댓값)
// 1과 2 중 더 작은 값 = 선택할 수 있는 최대 종류 수
function solution(nums) {
  return Math.min(new Set(nums).size, Math.floor(nums.length / 2));
}

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
