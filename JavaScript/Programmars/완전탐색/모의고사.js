class People {
  constructor() {
    this.score = 0;
  }

  grading = (pattern, answers) => {
    const answerLen = answers.length;
    const patternLen = pattern.length;
    for (let i = 0; i < answerLen; i++) {
      if (answers[i] === pattern[i % patternLen]) {
        this.score += 1;
      }
    }
  };
}

function solution(answers) {
  let answer = [];
  const a = new People();
  const b = new People();
  const c = new People();

  a.grading([1, 2, 3, 4, 5], answers);
  b.grading([2, 1, 2, 3, 2, 4, 2, 5], answers);
  c.grading([3, 3, 1, 1, 2, 2, 4, 4, 5, 5], answers);

  const scores = [a.score, b.score, c.score];
  const maxScore = Math.max(...scores);
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) answer.push(i + 1);
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]

// 다른 풀이
function solution(answers) {
  var answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == man1[i % man1.length]) count[0]++;
    if (answers[i] == man2[i % man2.length]) count[1]++;
    if (answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}
