// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/118666

// 4개 지표로 성격 유형 구분(총 16가지)
// 검사지 n개 질문, 7개 선택지(3, 2, 1, 0, 1, 2, 3점)
// 각 지표에서 더 높은 점수를 받은 유형이 성격 유형. 점수가 같으면 사전 순으로 빠른 것으로
// survey: 질문마다 판단하는 지표 / choices: 검사자가 선택한 선택지
// survey 첫 번째는 비동의 관련 선택했을 때 / 두 번째는 동의 관련 선택했을 때

function solution(survey, choices) {
  const choiceMap = new Map();
  choices.forEach((choice, i) => {
    let index;
    if (choice < 4) index = survey[i][0];
    else if (choice > 4) index = survey[i][1];

    let score;
    if (choice === 1 || choice === 7) score = 3;
    else if (choice === 2 || choice === 6) score = 2;
    else if (choice === 3 || choice === 5) score = 1;

    choiceMap.set(index, (choiceMap.get(index) || 0) + score);
  });

  function setIndex(a, b) {
    const countA = choiceMap.get(a) || 0;
    const countB = choiceMap.get(b) || 0;

    return countA >= countB ? a : b;
  }

  return (
    setIndex('R', 'T') +
    setIndex('C', 'F') +
    setIndex('J', 'M') +
    setIndex('A', 'N')
  );
}

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5])); // TCMA
console.log(solution(['TR', 'RT', 'TR'], [7, 1, 3])); //RCJA
