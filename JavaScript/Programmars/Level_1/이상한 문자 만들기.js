// 내 풀이
function solution(s) {
  const words = s.split(' ');
  const newWords = words.map((word, idx) => {
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) newWord += word[i].toUpperCase();
      else newWord += word[i].toLowerCase();
    }

    return newWord;
  });

  return newWords.join(' ');
}
