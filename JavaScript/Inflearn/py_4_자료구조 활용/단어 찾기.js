// 시에 쓰이지 않은 단어 찾기
const solution = (n, note, poem) => {
  const wordObj = {};
  note.forEach((word) => {
    wordObj[word] = (wordObj[word] || 0) + 1;
  });
  poem.forEach((word) => {
    wordObj[word]--;
  });
  for (let [word, count] of Object.entries(wordObj)) {
    if (count > 0) return word;
  }
};

console.log(
  solution(
    5,
    ['big', 'good', 'sky', 'blue', 'mouse'],
    ['sky', 'good', 'mouse', 'big']
  )
); // blue
