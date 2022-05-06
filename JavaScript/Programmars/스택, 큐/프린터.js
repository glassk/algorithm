function solution(priorities, location) {
  let answer = 0;
  const queue = priorities.map((value, index) => [index, value]);
  const order = priorities.sort((a, b) => b - a);

  while (queue.length > 0) {
    const [index, value] = queue.shift();
    if (value >= order[0]) {
      answer++;
      order.shift();
      if (index === location) return answer;
    } else {
      queue.push([index, value]);
    }
  }

  return answer;
}
