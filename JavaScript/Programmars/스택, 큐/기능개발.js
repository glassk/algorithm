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

// 250423
function solution(progresses, speeds) {
  // 각 기능이 완료되는 데 며칠 걸리는지 계산
  const days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  // 큐처럼 순서대로 처리하며, 앞 기능이 완료되는 날 기준으로 뒤의 기능들도 함께 배포 가능한지 판단
  const answer = [];
  let current = 0;
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= days[current]) {
      count++;
    } else {
      current = i;
      answer.push(count);
      count = 1;
    }
  }

  answer.push(count);

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
