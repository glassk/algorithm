function solution(dartResult) {
  const results = dartResult.match(/[0-9]+[SDT][*#]?/g);
  const bonuses = { S: 1, D: 2, T: 3 };
  const options = [];
  const scores = [];
  results.forEach((result) => {
    const score = /[0-9]+/.exec(result)[0];
    const bonus = /[SDT]/.exec(result)[0];
    const option = /[*#]/.exec(result);
    options.push(option ? option[0] : null);

    const bonusedScore = Math.pow(score, bonuses[bonus]);
    scores.push(bonusedScore);
  });

  for (let i = 0; i < 3; i++) {
    if (options[i]) {
      if (options[i] === '*') {
        if (i === 0) scores[i] *= 2;
        else {
          scores[i - 1] *= 2;
          scores[i] *= 2;
        }
      } else if (options[i] === '#') {
        scores[i] *= -1;
      }
    }
  }

  return scores.reduce((acc, val) => acc + val, 0);
}

console.log(solution('1S2D*3T')); // 37
console.log(solution('1D2S#10S')); // 9
console.log(solution('1D2S0T')); // 3
console.log(solution('1S*2T*3S')); // 23
console.log(solution('1D#2S*3S')); // 5
console.log(solution('1T2D3D#')); // -4
console.log(solution('1D2S3T*')); // 59
