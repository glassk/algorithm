function solution(progresses, speeds) {
  const queue = [];
  for (let i = 0; i < progresses.length; i++) {
    queue.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  const answer = [];
  let funcCount = 1;
  while (queue.length) {
    const current = queue.shift();
    while (true) {
      if (queue[0] <= current) {
        funcCount++;
        queue.shift();
      } else break;
    }

    answer.push(funcCount);
    funcCount = 1;
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
