// https://school.programmers.co.kr/learn/courses/30/lessons/42587
function solution(priorities, location) {
  const queue = priorities.map((value, index) => [value, index]);
  let answer = 0;

  while (queue.length) {
    const [priority, index] = queue.shift();
    if (queue.some(([value]) => value > priority)) {
      queue.push([priority, index]);
      continue;
    }

    answer++;
    if (index === location) {
      return answer;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
