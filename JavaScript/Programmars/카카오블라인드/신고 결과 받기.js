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

// 다른 풀이: reportCount로 신고당한 횟수 따로 카운트
function solution(id_list, report, k) {
  const reportInfo = {};
  const reportCount = {};

  id_list.forEach((id) => {
    reportInfo[id] = new Set(); // 신고된 유저 아이디 = { 신고한 유저 목록 }
    reportCount[id] = 0; // 신고당한 횟수
  });
  report.forEach((v) => {
    const [reporter, reported] = v.split(' ');
    reportInfo[reported].add(reporter);
  });

  Object.values(reportInfo).forEach((reporters) => {
    if (reporters.size >= k) {
      for (let reporter of reporters) {
        reportCount[reporter]++;
      }
    }
  });

  return Object.values(reportCount);
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
); // [ 2, 1, 1, 0 ]
console.log(
  solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3)
); // [ 0, 0 ]
