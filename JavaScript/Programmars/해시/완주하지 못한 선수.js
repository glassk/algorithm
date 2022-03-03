function setMap(arr) {
  const resultMap = new Map();

  for (let item of arr) {
    if (resultMap.has(item)) {
      resultMap.set(item, resultMap.get(item) + 1);
    } else {
      resultMap.set(item, 1);
    }
  }

  return resultMap;
}

function solution(participant, completion) {
  const participantMap = setMap(participant);
  const completionMap = setMap(completion);

  for (let [runner, count] of participantMap) {
    if (!completionMap.has(runner) || completionMap.get(runner) !== count)
      return runner;
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // "leo"
console.log(
  solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola']
  )
); // "vinko"
console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
); // "mislav"

// 다른 코드: Map 초기화 참고! Map과 for문 하나로 두 map 비교
function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return 'nothing';
}
