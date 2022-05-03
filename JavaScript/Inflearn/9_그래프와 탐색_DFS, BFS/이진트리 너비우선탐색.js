function solution() {
  let answer = '';
  const queue = [];
  queue.push(1);

  while (queue.length) {
    const v = queue.shift();
    answer += v + ' ';
    for (let next of [v * 2, v * 2 + 1]) {
      if (next > 7) continue;
      queue.push(next);
    }
  }

  return answer;
}

console.log(solution()); // 1 2 3 4 5 6 7
