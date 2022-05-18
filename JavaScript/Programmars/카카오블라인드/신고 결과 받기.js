function solution(id_list, report, k) {
  const idMap = new Map();
  id_list.forEach((id, index) => {
    idMap.set(id, new Set([index]));
  });

  // 신고 받은 사람: {신고한 사람들}
  report.forEach((ids) => {
    const [reporter, reported] = ids.split(' ');
    idMap.set(reported, idMap.get(reported).add(reporter));
  });

  const answer = Array.from({ length: id_list.length }, () => 0);
  for (let [, reporters] of idMap) {
    if (reporters.size > k) {
      const receivers = Array.from(reporters).slice(1);
      receivers.forEach((receiver) => {
        const index = Array.from(idMap.get(receiver))[0];
        answer[index]++;
      });
    }
  }

  return answer;
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
); // [2,1,1,0]
console.log(
  solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3)
); // [0, 0]
