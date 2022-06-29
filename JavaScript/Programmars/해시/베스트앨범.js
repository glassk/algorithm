// 문제: https://programmers.co.kr/learn/courses/30/lessons/42579
const solution = (genres, plays) => {
  const genreMap = new Map();
  const countMap = new Map();
  const len = genres.length;
  for (let i = 0; i < len; i++) {
    if (genreMap.has(genres[i])) {
      genreMap.set(genres[i], [...genreMap.get(genres[i]), [i, plays[i]]]);
    } else {
      genreMap.set(genres[i], [[i, plays[i]]]);
    }
    countMap.set(genres[i], (countMap.get(genres[i]) || 0) + plays[i]);
  }

  let countArr = [];
  for (let [genre, count] of countMap) {
    countArr.push([genre, count]);
  }
  countArr.sort((a, b) => b[1] - a[1]);

  const answer = [];
  countArr.forEach(([genre, count]) => {
    const plays = genreMap.get(genre);
    if (plays.length === 1) {
      answer.push(plays[0][0]);
    } else {
      plays.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        return b[1] - a[1];
      });
      answer.push(plays[0][0]);
      answer.push(plays[1][0]);
    }
  });

  return answer;
};

console.log(
  solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500]
  )
); // [4, 1, 3, 0]
